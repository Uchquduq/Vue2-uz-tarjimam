import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './Color'

Vue.directive('colored', ColorDirective)

new Vue({
    el: '#app',
    render: h => h(App)
})