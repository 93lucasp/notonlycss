<template>
  <Layout>
    <h1>Events</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
     <ul>
      <li v-for="event in $page.events.edges" :key="event.id">
        <g-link :to="event.node.path">
            <h1>{{event.node.title}}</h1>
            <p>{{event.node.abstract}}</p>
          
          
        </g-link>
      </li>
    </ul>
  </Layout>
</template>
<page-query>
query {
  events: allEvents {
    edges {
      node {
        path
        title
        abstract
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
