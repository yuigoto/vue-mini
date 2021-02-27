import Vue from "vue";
import VueRouter from "vue-router";
import Home from "~js/views/routes/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sobre",
    name: "Sobre",
    /**
     * Code-splitting a nivel de rota.
     *
     * Declarar o componente desta forma gera um chunk de código separado
     * (`Sobre.[hash].js`) para esta rota, que é carregada com `lazy-load`
     * quando a rota é visitada.
     *
     * @returns {Promise<*>}
     */
    component: () => import(/* webpackChunkName: "sobre" */ "~js/views/routes/Sobre.vue")
  },
  {
    path: "/debug",
    name: "Debug",
    component: () => import(/* webpackChunkName: "debug" */ "~js/views/routes/Debug.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
