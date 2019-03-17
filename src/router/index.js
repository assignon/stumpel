import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Block from '@/components/Block.vue'
import Order from '../components/order/Order'
// import Filter from '../components/filter'
import Prototype from '@/components/liam/prototype'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Block
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/order',
            name: 'order',
            component: Order
        },
        {
            path: '/L-prototype',
            name: 'L-prototype',
            component: Prototype
        }
    ],
    mode: 'history'

})