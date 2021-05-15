import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: localStorage.getItem("user") || "",
  },
  getters: {
    isLog: (state) => !!state.user,
    getUser: (state) => state.user,
  },
  mutations: {
    aut: (state, pay) => {
      state.user = pay.user;

      localStorage.setItem("user", pay.user);
    },
  },
  actions: {
    add: async (context, payload) => {
      await context.commit("aut", {
        user: payload,
      });
    },
  },
  modules: {},
});
