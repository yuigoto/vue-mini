<template>
  <div>
    <h2 class="display-4">
      Sobre
    </h2>

    <p class="lead">Este projeto vem da minha necessidade de prototipar determinadas ideias rapidamente, e da necessidade de evitar o uso excessivo de boilerplate code para coisas pequenas e rápidas.</p>

    <p>É isso, tem mais nada não aqui. Fica com um GIF estranho:</p>

    <p>
      <img src="/img/spin-spin.gif" alt="">
    </p>
  </div>
</template>

<script>
export default {
  name: "view.sobre",
  mounted: function () {
    console.log("[Views] [Sobre] mounted");
  }
}
</script>
