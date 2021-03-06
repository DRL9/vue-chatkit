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
    error: "Relax! This is just a drill error message",
    user: {
      name: "Jack Sparrow",
      username: "Jack"
    },
    reconnect: false,
    activeRoom: {
      id: "124"
    },
    rooms: [
      {
        id: "123",
        name: "Ships"
      },
      {
        id: "124",
        name: "Treasure"
      }
    ],
    users: [
      {
        username: "Jack",
        name: "Jack Sparrow",
        presence: "online"
      },
      {
        username: "Barbossa",
        name: "Hector Barbossa",
        presence: "offline"
      }
    ],
    messages: [
      {
        username: "Jack",
        date: "11/12/1644",
        text: "Not all treasure is silver and gold mate"
      },
      {
        username: "Jack",
        date: "12/12/1644",
        text: "If you were waiting for the opportune moment, that was it"
      },
      {
        username: "Hector",
        date: "12/12/1644",
        text: "You know Jack, I thought I had you figured out"
      }
    ],
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
