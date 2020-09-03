import request from '@/utils/request'

export default {
    getList() {
        return request({
            url: "http://mengxuegu.com:7300/mock/5f50519f8d90085e5b58403f/first/test",
            methods:'get'
        })
    }
}