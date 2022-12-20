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
        'X-Requested-With': 'XMLHttpRequest'
    }
})




instance.interceptors.request.use(
    async (config) => {
        // Do something before request is sent
        const csrf = Cookies.get('X-XSRF-TOKEN');
        console.log("debug", csrf);
        config.withCredentials = true;

        if (csrf) {
            // console.log("YES", csrf);
            config.headers['X-XSRF-TOKEN'] = csrf;
        }
        
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);


export default instance;