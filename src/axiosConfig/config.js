import axios from "axios"

const instance = axios.create({
    // baseURL: 'http://localhost:3000/',
    // timeout: 300000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})




instance.interceptors.request.use(
    config => {
        config.headers["X_XSRF_TOKEN"]  = config.headers.get('DSPACE-XSRF-TOKEN');
        return config;
    },
    error => {
        return Promise.reject(error);
    }
  );


export default instance;