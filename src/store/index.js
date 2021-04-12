import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:0,
    carts:[]
  },
  mutations: {
    INCREMENT_COUNT (state,incrementBy) {
      state.count+=incrementBy
    },

    ADD_TO_CART(state, item) {
      // Object.isObject(item) && state.carts.push(item)
      const idx = state.carts.findIndex((val) => (val.id == item.id));
      idx !== -1 ? state.carts[idx].qty += 1 : state.carts.push(item)
    },
    REMOVE_FROM_CART(state, item) {
      const idx = state.carts.findIndex((val) => (val.id == item.id));
      state.carts.splice(idx,1)
      // idx == 1 ? state.carts[idx].qty -= 1 : state.carts.splice(item)
    },
  },


  actions: {

    increment (context) {
      context.commit(' INCREMENT_COUNT')
    },
    addCart({ commit }, item) {
      commit('ADD_TO_CART', item)
    },
    removeCart({ commit }, item) {
      commit('REMOVE_FROM_CART', item)
    }
   
  },
  modules: {}
});
