import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        characters: []
    },
    getters: {
      getCharacters: (state) => state.characters
    },
    actions: {
      async fetchCharacters({ commit }) {
          try {
            const data = await axios.get('https://jsonplaceholder.typicode.com/users')
              commit('SET_CHARACTERS', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
    mutations: {
        SET_CHARACTERS(state, characters) {
          state.characters = characters
      }
    }
})