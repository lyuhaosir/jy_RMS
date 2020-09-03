import axios from 'axios'

const Server = axios.create({
    baseURL: "",
    timeout: 3000,
})

Server.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

Server.interceptors.response.use(response => {
    // Do something before response is sent
    if (response.status == 200) {
        return response.data
    }
    return response;
}, error => {
    // Do something with response error
    return Promise.reject(error);
});

export default Server