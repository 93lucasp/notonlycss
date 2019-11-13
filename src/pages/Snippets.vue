<template>
  <Layout>
   
      <h1 class="title__page">Snippets</h1>
      <p
        class="description__page"
      >As frontend developers we love animations, so we decided to create a list of awesome web animations, we decided embed codepen to have the code of every single animation always available.</p>
   
    <ul>
      <li v-for="snippet in $page.snippets.edges" :key="snippet.id" class="snippet">
        <div class="snippet__col1">
          <h1 class="snippet__title">{{snippet.node.title}}</h1>
          <p class="snippet__author">by {{snippet.node.author}}</p>
          <p class="snippet__abstract">{{snippet.node.abstract}}</p>
        </div>

        <div v-html="snippet.node.content" class="snippet__col2"></div>
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
      { name: 'description', content: 'Snippets of awesome animations' },
      { property: 'og:title', content: 'Not Only CSS | Snippets' },
      { property: 'og:description', content: 'Articles and tips for frontend developers' },
      { property: 'og:image', content: 'https://www.notonlycss.com/uploads/share.png' },
      { property: 'og:url', content: 'https://www.notonlycss.com/snippets' },
    ]
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
  display: flex;
  justify-content: space-between;
}
.snippet__col1 {
  width: 45%;
  padding-right: 15px;
}
.snippet__col2 {
  width: 55%;
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