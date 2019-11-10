<template>
  <BlogLayout>
      <h1>{{$page.event.title}}</h1>
       <img :src="$page.event.image" alt="">
      <time>{{$page.event.date}}</time>
    <div v-html="$page.event.content"> </div>
  </BlogLayout>
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
   }
  }
}
</script>

