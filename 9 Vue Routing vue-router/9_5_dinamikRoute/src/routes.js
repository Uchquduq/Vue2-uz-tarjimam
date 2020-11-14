import VueRouter from 'vue-router'
import Car from './pages/Car'
import Home from './pages/Home'
import Car2 from './pages/Car2'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/car',
            component: Car
        },
        {
            path: '/car/:id',
            component: Car2
        }
    ],
    mode: 'history'
})
