import axios from 'axios'

import {Loading} from 'element-ui'

const Server = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 3000,
})

const loading = {
    loadingInstance:null,
    open(){
        if(this.loadingInstance == null){
            Loading.service({
                target:'.main',
                text:'正在加载中',
                background:"rgba(0,0,0,0.5)"
            })
        }else{
            this.loadingInstance = null
        }
    },
    close(){
        if(this.loadingInstance != null){
            this.loadingInstance.close()
        }
        this.loadingInstance = null
    }

}

Server.interceptors.request.use(config => {
    // loading.open()
    const token = localStorage.getItem('jy_token') ? localStorage.getItem('jy_token') : "";
    //发送token
    config.headers.Authorization = token;
    
    // Do something before request is sent
    return config;
}, error => {
    loading.close()
    // Do something with request error
    return Promise.reject(error);
});

Server.interceptors.response.use(response => {
    loading.close()
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