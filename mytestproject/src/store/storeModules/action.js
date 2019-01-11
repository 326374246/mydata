
import store from '../index'

const action = {
  actions : {
    setName({commit},username){
      commit('SETUSERNAME', username)
    },
    incrementvalue({commit}) {
      commit("INCREMENT")
    }
  }
}

export default action
