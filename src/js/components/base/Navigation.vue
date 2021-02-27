<template>
  <nav id="navigation">
    <router-link 
      v-for="(route, index) in routes"
      :key="index"
      :to="route.path">{{route.name}}</router-link>
  </nav>  
</template>

<script>
export default {
  name: "base-navigation",
  data: function () {
    return {
      routes: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Sobre",
          path: "/sobre"
        },
        {
          name: "Debug",
          path: "/debug"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#navigation {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
  padding: .5rem 0;

  a {
    font-size: 1.25rem;

    & + a {
      margin-left: 1rem;
    }
  }
}
</style>
