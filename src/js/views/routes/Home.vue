<template>
  <div>
    <h2 class="display-4">
      Home
    </h2>

    <blockquote class="blockquote border-left p-2 pl-5">
      <p>Um template mínimo para desenvolvimento e prototipagem de projetos com <strong>Vue.js</strong>. Contém suporte à:</p>

      <ul>
        <li>Vue Router</li>
        <li>SCSS</li>
      </ul>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "view.home",
  mounted: function () {
    console.log("[Views] [Home] mounted");
  }
}
</script>
