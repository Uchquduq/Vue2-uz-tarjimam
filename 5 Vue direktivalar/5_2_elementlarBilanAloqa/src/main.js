import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './Color.js'

Vue.directive('colored', ColorDirective)

new Vue({
    el: '#app',
    render: h => h(App)
})