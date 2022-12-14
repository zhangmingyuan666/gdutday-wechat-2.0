export default {
  namespaced: true,
  state:() => ({
    isLogin:uni.getStorageSync('isLogin')?uni.getStorageSync('isLogin'):false,//是获取的目前的周数，不改变
    //keyValue:0,
    toastIsShow:false,
    backgroundImage:uni.getStorageSync('backgroundImage') ? uni.getStorageSync('backgroundImage'): ''
  }),

  mutations: {
    setIsLogin(state,payload) {
      state.isLogin = payload.isLogin;
      uni.setStorageSync('isLogin', payload.isLogin);
    },
    // setKeyValue(state,payload){
    //   state.keyValue=state.keyValue+1;
    //   console.log(state.keyValue);
    // },
    setToastIsShow(state,payload){
      state.toastIsShow = payload.toastIsShow;
    },
    setBackgroundImage(state, payload){
      state.backgroundImage = payload.backgroundImagePath;
    }
  }
}
