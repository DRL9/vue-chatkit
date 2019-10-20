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
  state: {
    loading: false,
    sending: false,
    error: null,
    user: {},
    reconnect: false,
    activeRoom: null,
    rooms: [],
    users: [],
    messages: [],
    userTyping: null
  },
  mutations,
  actions,
  getters: {
    hasError: state => Boolean(state.error)
  },
  plugins: [vueLocal.plugin],
  strict: process.env.NODE_ENV !== "production"
});
