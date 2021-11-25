import { createStore } from "vuex";
import { apiGetPhotoRequest } from "../api";
export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    async getApi({commit}){
      
    try{
      const res = await apiGetPhotoRequest();
      commit("getApi",res.data)
      return res.data
    }catch(error){
      console.log(error.response.data);
    }
        
      
    },
    dataState({commit},bool){
      commit("dataState",bool)
    },
    addClick({commit}){
      commit("addClick")
    },
    removeClick({commit}){
      commit("removeClick")
    },
    
  },
  mutations: {
    getApi(state,photoArr){
      state.photoArr= photoArr
    },
    dataState(state,bool){
      state.isLoad = bool;
    },
    addClick(state){
      state.idx++
      if (state.idx>state.photoArr.length-1) {
        state.idx=0
      }
    },
    removeClick(state){
      state.idx--
      if (state.idx < 0 ) {
        state.idx=state.photoArr.length-1
      }
    }


  },
  getters: {
    isLoad(state) {
      return state.isLoad;
    },
    photoArr(state) {
      return state.photoArr;
    },
    idx(state) {
      return state.idx;
    },
  },
});
