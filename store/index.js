import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    counter: 0,
    visits: []
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    ADD_VISIT (state, path) {
      console.log('ADD_VISIT----->', state, path, state.visits)
      state.visits.push({
        path,
        date: new Date().toJSON()
      })
      console.log('ADD_VISIT PUSH---->', state.visits)
    }
  }
})

export default store
