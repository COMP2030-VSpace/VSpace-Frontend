import axios from "axios"
import Cookies from 'js-cookie';

const instance = axios.create({
    // baseURL: 'http://localhost:3000/',
    // timeout: 300000,
    withCredentials: true,
    mode: 'cors',
    // xsrfHeaderName: 'DSPACE-XSRF-TOKEN',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        // 'Access-Control-Allow-Credentials':true,
        // 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
})


const refreshToken = (newCsrf) => {
    Cookies.set("X-XSRF-TOKEN", newCsrf, {path: "/"});
}

const refreshUserToken = (newToken) => {
    Cookies.set("user-token", newToken, {path: "/"});
}


// instance.interceptors.request.use(
//     (config) => {

//         // Do something before request is sent
//         const csrf = Cookies.get('X-XSRF-TOKEN');
//         // console.log("debug", csrf);
        
//         if(csrf){
//             config.headers['X-XSRF-TOKEN'] = csrf;
//         }

//         return config;

//     }, (error) => {
//         console.log("debug 4")
//         return Promise.reject(error);
//     }
// )


instance.interceptors.request.use(
    (config) => {

        // Do something before request is sent
        const csrf = Cookies.get('X-XSRF-TOKEN');
        const userToken = Cookies.get('user-token');
        // console.log("debug", csrf);
        
        if(csrf){
            config.headers['X-XSRF-TOKEN'] = csrf;
        }

        // if(userToken){
        //     config.headers['Authorization'] = userToken;
        // }

        // console.log(userToken);

        config.headers['Authorization'] = userToken;

        return config;

    }, (error) => {
        console.log("debug 4")
        return Promise.reject(error);
    }
)



instance.interceptors.response.use(
    // 
    (resp) =>{
        // pass


        const token = resp.headers.authorization
        // console.log("debug token", token);

        if(token){
            // console.log("debug token", token);
            // instance.defaults.headers.common['Authorization'] = token;
            refreshUserToken(token);
        }

        if(resp.data === ""){
            resp.data = {
                success: true
            }
        }
        else{
            resp.data.success = true;
        }
        

        return resp;
        
    },
    (error) => {
        // Do something with request error
        if(error.response.status === 403){
            // console.log("in here");
            
            const newCsrf = error.response.headers["dspace-xsrf-token"];
            refreshToken(newCsrf);

            // Cookies.set("X-XSRF-TOKEN", newCsrf, {path: "/"});
        }
        return Promise.reject(error);
    }
);


export default instance;