<template>
  <BlogLayout>
      <h1>{{$page.post.title}}</h1>
      <img :src="$page.post.featuredImage" alt="">
    <div v-html="$page.post.content"> </div>
  </BlogLayout>
</template>

<page-query>
query Post ($path: String!) {
    post: post (path: $path) {
      title
      content
      featuredImage
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








// post (path: "/blog/blog-post-one") {
//   title
//   content
//  }