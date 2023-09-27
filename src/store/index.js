import { createStore } from "vuex";
import { me, signin } from "../services/auth";

const store = createStore({
  state() {
    return {
      user: null,
      isAuthenticated: false,
    };
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_AUTHENTICATED(state, value) {
      state.isAuthenticated = value;
    },
    AUTO_LOGIN(state) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        state.user = user;
        state.isAuthenticated = true;
      }
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await signin(credentials.email, credentials.password);
        const user = response.body;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", response.body.token);
        commit("SET_USER", user);
        commit("SET_AUTHENTICATED", true);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    logout({ commit }) {
      commit("SET_USER", null);
      commit("SET_AUTHENTICATED", false);
    },
    async autoLogin({ commit }) {
      try {
        const response = await me();
        
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => state.isAuthenticated,
  },
});

export default store;
