import { createContext, useReducer, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'

import { authReducer } from '../reducers/authReducer'
import { apiUrl } from "../contexts/constants";
import instance from '../axiosConfig/config';

import { userRole } from '../enums/enum';

import Cookies from 'js-cookie';
export const AuthContext = createContext()

// axios.defaults.withCredentials = true;

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        role: userRole.USER
    })

    const navigate = useNavigate();


    const redirectToLogin = () => {
        window.location.href = "/login";
        // history.replace('/login')
        // navigate("/login");
        // window.location.reload(true);
    }

    let flag = false;
    useEffect(() => {
        if(!flag){
            getCsrfTokenFetch();
            flag = true;
        }

        authUser();

        return;
    }, []);


    // get csrf token
    const getCsrfTokenFetch = async () => {
        try{            
            const url = "https://vinspace.online/server/api" + "/eperson/registrations";
        
            const response = await instance.post(url, {
                "email": "",
                "type": "registration"
            },{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
    
            
        } catch (error){
            // console.log("check cookie", document.cookie)
            // console.log(error)
            // console.log("check response headers", error);
            return {success: false};
        }
    }

    // auth => return role
    const authUser = async () => {
        try {
            // check admin
            
            let url_head =  "https://vinspace.online/server/api/authz/authorizations/search/object?";
            let url_middle = "uri=https://vinspace.online/server/api/core/sites/";
            let url_tail = "390e5010-e1b0-42ce-ab2e-09d94c00bc84&feature=administratorOf&embed=feature"

            let url = url_head + url_middle + url_tail;

            let response = await instance.get(url);

            // console.log("view admin auth", response);
            let numberOfElements = response.data.page.totalElements;

            // console.log(numberOfElements);

            const userToken = Cookies.get('user-token');

            if(userToken){
                if(numberOfElements === 1){
                    // update global state: role
                    
                    Cookies.set("role", userRole.SITE_ADMIN, {path: "/"});

                    return {
                        success: true,
                        role: userRole.SITE_ADMIN
                    };
                }
                else{
                    url = "https://vinspace.online/server/api/authn/status";
                    response = await instance.get(url);

                    if(response.data.authenticated){
                        Cookies.set("role", userRole.LOGIN_USER, {path: "/"});
                    }

                    return {
                        success: true,
                        role: userRole.LOGIN_USER
                    };
                }
            }
            

            Cookies.set("role", userRole.USER, {path: "/"});
            return {
                success: false,
                role: userRole.USER
            };

        } catch (error) {
            if (error.response.data)
                return error.response.data;
            else
                return { success: false, message: error.message };
        }

    }




    // Register
    const registerUser = async (userForm) => {
        try {
            const url = "https://vinspace.online/server/api" + "/eperson/registrations";
            // console.log("check url", url);
            const response = await instance.post(url, userForm, {
                headers:{
                    'Content-Type': 'application/json'
                }
            })

            console.log("debug register user", response);

            // if (response.data.success){
            //     console.log("login successfully", response.data);
            // }

            return response;
        } catch (error) {
            if (error.response.data)
                return error.response.data;
            else
                return { success: false, message: error.message };
        }

    }


    // login
    const loginUser = async (userForm) => {
        try {
            const url = "https://vinspace.online/server/api" + "/authn/login";
            // console.log("check url", url);
            const response = await instance.post(url, userForm, {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })

            return {
                success: true
            };

        } catch (error) {
            if (error.response.data)
                return error.response.data;
            else
                return { success: false, message: error.message };
        }

    }



    const logout = async () => {
        const url = "https://vinspace.online/server/api/authn/logout"
        const response = await instance.post(url)

        const status = response.status;
        if(status === 204){
            // delete token
            Cookies.remove("role", {path: "/"});
            Cookies.remove("user-token", {path: "/"});
        }
        
        window.location.href = "/";
    }



    const authContextData = { redirectToLogin, loginUser, registerUser, logout, authUser, authState }

    return (<AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>)

}

export default AuthContextProvider
