import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        changeCounter (state, payload) {
            state.counter += payload
        }
    },
    getters: {
        computedCounter (state) {
            return state.counter * 10
        }
    }
})
