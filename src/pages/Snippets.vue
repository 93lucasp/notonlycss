<template>
  <Layout>
    <h1>Snippets</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
     <ul>
      <li v-for="snippet in $page.snippets.edges" :key="snippet.id">
  
            <h1>{{snippet.node.title}}</h1>
            <p>{{snippet.node.abstract}}</p>
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
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
