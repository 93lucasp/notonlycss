<template>
  <Layout>
    <h1 class="title__page">Events</h1>
    <p
      class="description__page"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <ul>
      <li v-for="event in $page.events.edges" :key="event.id" class="event">
        <div>
          <div
            class="event__preview"
            :style="{ 'background-image': 'url(' + event.node.image + ')' }"
          ></div>
        </div>
        <div class="event__body">
          <g-link :to="event.node.path" class="event__link">
            <h1 class="event__title">{{event.node.title}}</h1>
            <p class="event__abstract">{{event.node.abstract}}</p>
          </g-link>
          <p>Date: {{event.node.date}}</p>
        </div>
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
        image
        date
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Not Only CSS | Events"
  }
};
</script>
<style>
.event {
  background-color: #0e2d43;
  padding: 30px;
  color: #fff;
  margin-bottom: 50px;
  list-style: none;
  border-radius: 5px;
  display: flex;
}
@media screen and (max-width: 576px) {
  .event {
    display: block;
  }
}
.event__body {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.event__body p{
  margin-top: 0;
}
.event__title {
  font-size: 30px;
  line-height: 34px;
  margin-top: 0;
}
.event__abstract {
  font-size: 20px;
  margin-bottom: 30px;
}
.event__preview {
  width: 180px;
  height: 120px;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  margin-right: 30px;
}
@media screen and (max-width: 576px) {
  .event__preview {
    width: 100%;
    height: 160px;
    margin-bottom: 30px;
    margin-right: 0px;
  }
}
.event__link {
  color: #fff;
  text-decoration: none;
}
</style>
