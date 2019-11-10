<template>
  <Layout>
    <h1>{{$page.post.title}}</h1>
    <!-- <img :src="$page.post.thumbnail" alt="" style="max-width: 100%;"> -->
    <p v-html="$page.post.content"></p>
  </Layout>
</template>

<page-query>
query ReddiPost ($path: String!) {
    post: redditPost (path: $path) {
        id
        title
        path
        thumbnail
        date
        author
        content
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
   return {
       title: this.$page.post.title
   }
  }
}
</script>
<style>
  p img {
      max-width: 100%;
    }
  

</style>
