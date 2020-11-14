import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './routes'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router
})