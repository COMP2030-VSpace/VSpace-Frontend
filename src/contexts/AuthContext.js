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
        user: null,
        flagShowLoginPanel: false
    })

    // const history = useHistory();


    const redirectToLogin = () => {
        // window.location.href = "/login";
        // history.replace('/login')
    }




    useEffect(() => {
        const getToken = async () => {
            await getCsrfTokenFetch();
            // await getCsrfTokenAxios();
        }


        // let xhr = new XMLHttpRequest();
        // xhr.open("GET", "https://vinspace.online/server/api/authn/status", [true])

        getToken();
    }, []);


    // get csrf token
    const getCsrfTokenFetch = async () => {
        try{

            const csrf = Cookies.get('X-XSRF-TOKEN');

            if(!csrf){
                const url = "https://vinspace.online/server/api/authn/status"
                let xhr = new XMLHttpRequest();
                xhr.open("GET", url, [true])

                await xhr.send()


                xhr.onload = () => {
                    const csrf = xhr.getResponseHeader("DSPACE-XSRF-TOKEN");
                    console.log("hope hope", csrf);
                    // let d = new Date();
                    // d.setTime(d.getTime() + (minutes*60*1000));
                    Cookies.set("X-XSRF-TOKEN", csrf, {path: "/"});
                }

            }
    
            
        } catch (error){
            // console.log("check cookie", document.cookie)
            console.log(error)
            // console.log("check response headers", error);
            return {success: false};
        }
    }



    const getCsrfTokenAxios = async () => {
        try{
            // const url = apiUrl + "/eperson";
            const url = "https://vinspace.online/server/api/authn/status"

            const response = await instance.get(url)

            console.log("check response", response);

        } catch (error){
            // console.log("check cookie", document.cookie)
            console.log(error)
            // console.log("check response headers", error);
            return {success: false};
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


    // Login 
    const loginUser = async (userForm) => {
        try {
            const url = process.env.API_URL + "/auth/login";

            const response = await instance.post(url, userForm)

            if (response.data.success)
                localStorage.setItem('login', true);
                // setAuthToken(response.headers.authorization)

            return response.data;

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



    const authContextData = { redirectToLogin, loginUser, registerUser, authState }

    return (<AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>)

}

export default AuthContextProvider
