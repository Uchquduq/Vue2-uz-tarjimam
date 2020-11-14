import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './routes'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router
})