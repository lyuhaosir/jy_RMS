import adminList from '@/views/dataAdmin/adminList'
import foodList from '@/views/dataAdmin/foodList'
import merchant from '@/views/dataAdmin/merchant'
import orderForm from '@/views/dataAdmin/orderForm'
import userList from '@/views/dataAdmin/userList'


const datalist = [
    {
        path:'/adminlist',
        component:adminList,
        meta:{title:'管理员列表'}
    },
    {
        path:'/foodlist',
        component:foodList,
        meta:{title:'食品列表'}
    },
    {
        path:'/merchant',
        component:merchant,
        meta:{title:'商家列表'}
    },
    {
        path:'/orderform',
        component:orderForm,
        meta:{title:'订单列表'}
    },
    {
        path:'/userlist',
        component:userList,
        meta:{title:'用户列表'}
    }
]

export default datalist