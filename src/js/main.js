import Vue from "vue";
import Main from "~js/views/Main.vue";
import router from "~js/router";

Vue.config.productionTip = false;

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.name || "Vue Minimal";
  });
});

new Vue({
  router, 
  render: h => h(Main)
}).$mount("#app");
