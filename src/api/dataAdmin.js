import request from '@/utils/request'

export default {
    getUserList() {
       return request({
           url:"https://elm.cangdu.org/v1/users/list?offset=0&limit=20"
       })
    },
    merchantList(){
        return request({
            url:'https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20'
            // latitude=39.90469&longitude=116.407173&
        })
    }
}