<template>
  <div id="main">
    <base-header></base-header>

    <base-navigation></base-navigation>

    <div id="contents">
      <router-view></router-view>
    </div>

    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from "~js/components/base/Header.vue";
import BaseFooter from "~js/components/base/Footer.vue";
import BaseNavigation from "~js/components/base/Navigation.vue";

export default {
  components: {
    BaseHeader, 
    BaseFooter,  
    BaseNavigation
  },
  // Importante usar `function` com métodos de um componente!
  mounted: function () {
    console.log(`Hello!`);
    console.log(`[Main] mounted`);
  }
}
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
}

#contents {
  flex: 1;
}
</style>
