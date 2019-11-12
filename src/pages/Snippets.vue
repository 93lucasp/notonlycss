<template>
  <Layout>
    <h1 class="title__page">Snippets</h1>
    <p
      class="description__page"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <ul>
      <li v-for="snippet in $page.snippets.edges" :key="snippet.id" class="snippet">
        <h1 class="snippet__title">{{snippet.node.title}}</h1>
        <p class="snippet__author">{{snippet.node.author}}</p>
        <p class="snippet__abstract">{{snippet.node.abstract}}</p>
        <div v-html="snippet.node.content"></div>
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
    title: "Not Only CSS | Snippets"
  }
};
</script>
<style>
.snippet {
  background-color: #0e2d43;
  padding: 30px;
  color: #fff;
  margin-bottom: 50px;
  list-style: none;
  border-radius: 5px;
}
.snippet__title {
  font-size: 30px;
  line-height: 16px;
  margin-top: 0;
  margin-bottom: 0;
}
.snippet__abstract {
  font-size: 20px;
  margin-bottom: 30px;
}
.snippet__author {
  font-size: 14px;
  margin-bottom: 15px;
}
</style>