import router from './router/index'

import {Message} from 'element-ui'

import memberApi from './api/test'


router.beforeEach((to,from,next)=>{
    const token = localStorage.getItem('jy_token')
    // console.log(token);
    if(!token){
        if(to.path != '/login'){
            Message.warning('请先登录')
            next('/login')
        }else{
            next()
        }
    }else{
        const info = localStorage.getItem('jy_info')
        if(info){
            next()
        }else{
            memberApi.LoginInFo().then(res=>{
                // console.log(res);
                if(res.data.code == 200){
                    localStorage.setItem('jy_info',JSON.stringify(res.data.data))
                    next()
                }else{
                    localStorage.removeItem('jy_info')
                    Message.warning('请先登录')
                    next('/login')
                }
            }).catch(error=>{
                console.log(error);
            })
        }
    }
})