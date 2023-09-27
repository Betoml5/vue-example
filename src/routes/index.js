import * as VueRouter from "vue-router";
import Signin from "../components/Signin.vue";
import Home from "../components/Home.vue";
import Dashboard from "../screens/user/Dashboard.vue";
import store from "../store";
const routes = [
  { path: "/", component: Home },
  { path: "/signin", component: Signin },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.path !== "/signin" && !isAuthenticated) next({ path: "/signin" });
  else next();
});

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
