import VueRouter from 'vue-router'
import Car from './pages/Car'
import Home from './pages/Home'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/car',
            component: Car
        }
    ],
    mode: 'history'
})
