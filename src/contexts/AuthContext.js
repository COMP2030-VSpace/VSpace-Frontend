import { createContext, useReducer, useEffect } from 'react'
import { authReducer } from '../reducers/authReducer'
// import { useHistory } from 'react-router-dom'
import { apiUrl } from "../contexts/constants";
import instance from '../axiosConfig/config';
import Cookies from 'js-cookie'

export const AuthContext = createContext()

// axios.defaults.withCredentials = true;

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        role: null
    })

    // const history = useHistory();


    const redirectToLogin = () => {
        // window.location.href = "/login";
        // history.replace('/login')
    }

    let flag = false;
    useEffect(() => {
        if(!flag){
            getCsrfTokenFetch();
            flag = true;
        }

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
            // get administratorOf feature first
            let url = "https://vinspace.online/server/api/authz/features"
            
            let response = await instance.get(url);

            console.log("view features", response);
            
            const adminFeature = response.data["_embedded"].features[0].id;
            console.log(adminFeature);


            // check admin
            let url_head =  "https://vinspace.online/server/api/authz/authorizations/search/object?";
            let url_middle = "uri=https://vinspace.online/server/api/core/sites/";
            let url_tail = "f459d178-2540-4048-ae2e-26e41dcbc6c1&feature="
            url = url_head + url_middle + url_tail + adminFeature;

            response = await instance.get(url);

            console.log("view features", response);

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



            if (response.data.success){
                console.log("login successfully", response.data);
            }

            return response.data;
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



    // const logout = async () => {
    //     localStorage.removeItem('login');
    //     await axios.post(`${apiUrl}/auth/logout`, {});
    //     window.location.href = "/login"
    // }



    const authContextData = { redirectToLogin, loginUser, registerUser, authUser, authState }

    return (<AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>)

}

export default AuthContextProvider
