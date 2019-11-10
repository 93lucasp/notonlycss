<template>
  <BlogLayout>
      <h1>{{$page.page.title}}</h1>
      <time>{{$page.page.date}}</time>
    <div v-html="$page.page.content"> </div>
  </BlogLayout>
</template>

<page-query>
query Page ($path: String!) {
    page: customPage (path: $path) {
      title
      content
      date
    }
}
</page-query>

<script>
export default {
  metaInfo() {
   return {
       title: this.$page.page.title
   }
  }
}
</script>

