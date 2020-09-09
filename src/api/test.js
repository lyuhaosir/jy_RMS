import request from '@/utils/request'

export default {
    login(username,password) {
        return request({
            url: "/user/login",
            method:'post',
            data:{
                username,
                password
            }
        })
    },
    LoginInFo(){
        return request({
            url:'/user/info',
        })
    },
    // 会员数据列表
    memberList(page,pageSize){
        return request({
            url:'/member/list',
            method:'get',
            params:{
                page,
                pageSize
            }
        })
    }
}