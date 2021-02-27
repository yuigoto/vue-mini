<template>
  <div>
    <h2 class="display-4">
      Debug
    </h2>

    <p class="lead">View de teste, carrega dados de uma API.</p>

    <p class="lead" v-if="loading">
      <strong>
        Carregando...
      </strong>
    </p>

    <p v-if="!loading && posts.length < 1">
      Nenhum post encontrado.
    </p>

    <ul v-if="!loading && posts.length > 0">
      <li v-for="(post, index) in posts" :key="index">
        {{ post.id }} - {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "view.debug",
  data: function () {
    return {
      posts: [],
      loading: false
    };
  },
  mounted: function () {
    console.log("[Views] [Sobre] mounted");

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then(e => e.json())
      .then(j => {
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
          this.posts = j;
        }, 2000);
      });
  }
}
</script>
