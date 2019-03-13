import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Block from '@/components/Block.vue'
import Order from '../components/order/Order'

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
        }
    ],
    mode: 'history'

})