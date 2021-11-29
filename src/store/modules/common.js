export default {
  namespaced: true,
  state:() => ({
    isLogin:uni.getStorageSync('isLogin')?uni.getStorageSync('isLogin'):false//是获取的目前的周数，不改变
  }),

  mutations: {
    setIsLogin(state,payload) {
      state.isLogin = payload.isLogin;
      uni.setStorageSync('isLogin', payload.isLogin);
    },
  }
}