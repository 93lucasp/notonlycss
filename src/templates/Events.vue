<template>
  <Layout>
    <div class="eventPage">
      <h1 class="text-3xl md:text-4xl font-bold mb-3">{{$page.event.title}}</h1>
      <div
        class="eventPage__image"
        :style="{ 'background-image': 'url(' + $page.event.image + ')' }"
      ></div>
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
<style lang="scss">
.eventPage {
  background-color: #0e2d43;
  padding: 30px;
  margin-bottom: 100px;
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
  h4 {
    font-size: 1em;
    font-weight: bold;
  }
  h5 {
    font-size: .83em;
    font-weight: bold;
  }
  h6 {
    font-size: .67em;
    font-weight: bold;
  }
  p {
    margin-bottom: 20px;
    font-size: 18px;
  }
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

