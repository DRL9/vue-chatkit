import Vuex from "vuex";
import Vue from "vue";
import VuexPersist from "vuex-persist";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

const vueLocal = new VuexPersist({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {},
  mutations,
  actions,
  getters: {},
  plugins: [vueLocal.plugin],
  strict: process.env.NODE_ENV !== "production"
});
