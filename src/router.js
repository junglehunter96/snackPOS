import Vue from "vue";
import Router from "vue-router";
import Pos from "./view/pos"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "pos",
      path: "/",
      component: Pos
    }
  ]
});
