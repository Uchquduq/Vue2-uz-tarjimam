import VueRouter from 'vue-router'
import Home from './pages/Home'
import ErrorCmp from './pages/Error'
import CarFull from './pages/CarFull'
import { required } from 'vuelidate/lib/validators'

const Car = resolve => {
    required.ensure(['./pages/Car.vue'], () => {
        resolve(
            require('./pages/Car.vue')
        )
    })
}

const Car2 = resolve => {
    required.ensure(['./pages/Car2.vue'], () => {
        resolve(
            require('./pages/Car2.vue')
        )
    })
}

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
