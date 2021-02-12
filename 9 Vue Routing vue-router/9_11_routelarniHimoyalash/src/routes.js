import VueRouter from 'vue-router'
import Car from './pages/Car'
import Home from './pages/Home'
import Car2 from './pages/Car2'
import ErrorCmp from './pages/Error'
import CarFull from './pages/CarFull'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/car',
            component: Car,
            name: 'cars'
        },
        {
            path: '/car/:id',
            component: Car2,
            children: [
                {
                    path: 'full', // localhost:8080/car/10/full
                    component: CarFull,
                    name: 'CarFull',
                    beforeEnter (to, from, next) {
                        console.log('beforeEnter')
                        /* if (false) {
                            next(true)
                        } else {
                            next(false)
                        } */
                        next()
                    }
                }
            ]
        },
        {
            path: '/none/',
            redirect: {
                name: 'cars'
            }
        },
        {
            path: '*',
            component: ErrorCmp
        }
    ],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        
        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return {selector: to.hash}
        }

        return {
            x:0,
            y:0
        }
    }
})
