<template>
  <Layout>
    <h1 class="title__page">Events</h1>
    <p class="description__page">
      We love meetup, we are an international community so why don't try to organize online meetup?
      <br />From here is born the idea.
      <br />Our meetup will be on frontend technologies, join them and be part of our community.
    </p>
    <ul>
      <li v-for="event in $page.events.edges" :key="event.id" class="event">
        <div>
          <div class="event__preview"
            :style="{ 'background-image': 'url(' + event.node.image + ')' }"
          ></div>
        </div>
        <div class="event__body">
          <div>
            <h1 class="event__title">{{event.node.title}}</h1>
            <p class="event__abstract">{{event.node.abstract}}</p>
            <!-- <p>Date: {{event.node.date}}</p> -->
            <g-link :to="event.node.path" class="event__link">Discover</g-link>
          </div>
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
    title: "Not Only CSS | Events",
    meta: [
      { name: 'description', content: 'The events of Not Only CSS' },
      { property: 'og:title', content: 'Not Only CSS | Events' },
      { property: 'og:description', content: 'Articles and tips for frontend developers' },
      { property: 'og:image', content: 'https://www.notonlycss.com/uploads/share.png' },
      { property: 'og:url', content: 'https://www.notonlycss.com/events' },
      { name: 'robots', content: 'index, follow' },
    ]
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
.event__link {
  padding: 6px 30px;
  border-radius: 5px;
  background-color: #123954;
  border-radius: 5px;
  transition: all 0.2s;
  border: 1px solid transparent;
}
.event__link:hover {
  border: 1px solid #fff;
  background-color: #0c2437;
}
.event__body {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.event__body p {
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
  width: 340px;
  height: 240px;
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
@media screen and (max-width: 576px) {
  .event__link {
    display: block;
    text-align: center;
    /* width: 100%; */
  }
}
</style>
