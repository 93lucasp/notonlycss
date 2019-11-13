<template>
  <Layout>
    <div class="eventPage">
      <h1>{{$page.event.title}}</h1>
      <div class="eventPage__image" :style="{ 'background-image': 'url(' + $page.event.image + ')' }"></div>
      <!-- <i><time>{{$page.event.date}}</time></i> -->
      <div v-html="$page.event.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
    event: events (path: $path) {
      title
      content
      date
      image
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.event.title
    };
  }
};
</script>
<style>
.eventPage {
  background-color: #0e2d43;
  padding: 30px;
  margin-bottom: 100px;
}
.eventPage__image {
   width: 100%;
    height: 400px;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    margin-bottom: 30px;
}
</style>

