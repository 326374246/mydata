import Vue from 'vue'
import Vuex from 'vuex'
import state from './storeModules/state'
import mutations from './storeModules/mutations'
import action from './storeModules/action'
import getters from "./getters";
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    // state,
    mutations,
    action
  },
  getters
  // state : {
  //   username: "person",
  //   count:0
  // }
  // ,
  // mutations : {
  //   SETUSERNAME:(state, data) => {
  //     state.username = data;
  //   },
  //   // 加1
  //   INCREMENT(state) {
  //     state.count++;
  //   }
  // }
  // ,
  // actions : {
  //   setName({commit},username){
  //     commit('SETUSERNAME', username)
  //   },
  //   incrementvalue({commit}) {
  //     commit("INCREMENT")
  //   }
  // }
})

export default store
