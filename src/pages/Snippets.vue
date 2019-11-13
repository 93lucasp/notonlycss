<template>
  <Layout>
    <h1 class="text-2xl md:text-3xl font-bold mb-3">Snippets</h1>
    <p
      class="text-lg md:text-xl mb-12"
    >As frontend developers we love animations, so we decided to create a list of awesome web animations, we decided embed codepen to have the code of every single animation always available.</p>

    <ul>
      <li
        v-for="snippet in $page.snippets.edges"
        :key="snippet.id"
        class="snippet p-8 mb-16 md:flex rounded"
      >
        <div class="lg:w-5/12 pr-4 mb-8 md:mb-0">
          <h1 class="text-2xl md:text-3xl font-bold mb-2">{{snippet.node.title}}</h1>
          <p class="mb-4">by {{snippet.node.author}}</p>
          <p class="text-lg md:text-xl">{{snippet.node.abstract}}</p>
        </div>

        <div v-html="snippet.node.content" class="lg:w-7/12"></div>
      </li>
    </ul>
  </Layout>
</template>
<page-query>
query {
  snippets: allSnippets {
    edges {
      node {
        title
        abstract
        content
        author
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Not Only CSS | Snippets",
    meta: [
      { name: "description", content: "Snippets of awesome animations" },
      { property: "og:title", content: "Not Only CSS | Snippets" },
      {
        property: "og:description",
        content: "Articles and tips for frontend developers"
      },
      {
        property: "og:image",
        content: "https://www.notonlycss.com/uploads/share.png"
      },
      { property: "og:url", content: "https://www.notonlycss.com/snippets" }
    ]
  }
};
</script>
<style>
.snippet {
  background-color: #0e2d43;
}
</style>