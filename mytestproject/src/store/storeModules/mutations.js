import store from '../index'

const mutations ={
  state : {
    username: "person",
    count:0
  }
  ,
  mutations : {
    SETUSERNAME:(state, data) => {
      state.username = data;
    },
    // 加1
    INCREMENT(state) {
      state.count++;
    }
  }
}

export default mutations
