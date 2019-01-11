
const getters = {
  getUsername: state => state.mutations.username,
  getCount: state => state.mutations.count
  // getUsername:function (state) {
  //   return state.mutations.username
  // },
  // getCount:function (state) {
  //   return state.mutations.count
  // }
}
export default getters
