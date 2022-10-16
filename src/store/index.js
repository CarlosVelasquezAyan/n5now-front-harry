import Vuex from 'vuex'
import HarryPotterStore from './modules/HarryPotterStore'

const store = () => {
  return new Vuex.Store({
    modules: {
      HarryPotterStore,
    }
  })
}
export default store