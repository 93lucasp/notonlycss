<template>
  <Layout> 
    <h1 class="text-2xl md:text-3xl font-bold mb-3">Newsletter</h1>
    <h2 class="text-xl md:text-2xl mb-4">The best Frontend articles in your inbox weekly</h2>
    <p class="text-lg md:text-xl mb-12">We publish each Tuesday, if you would like to receive our articles directly in your inbox, join our newsletter! We strongly believe in the <a href="https://substack.com/" target="_blank" rel="noopener noreferrer">Substack</a> project, so we decided to run our newsletter on their platform! </p>

    <iframe width="100%" height="220" src="https://notonlycss.substack.com/embed" frameborder="0" scrolling="no" class="mb-16"></iframe>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Not Only CSS | Newsletter",
    meta: [
      { name: 'description', content: 'Join the newsletter of Not Only CSS to be always updated on frontend technologies' },
      { property: 'og:title', content: 'Not Only CSS | Newsletter' },
      { property: 'og:description', content: 'Join the newsletter of Not Only CSS to be always updated on frontend technologies' },
      { property: 'og:image', content: 'https://www.notonlycss.com/uploads/share.png' },
      { property: 'og:url', content: 'https://www.notonlycss.com/newsletter' },
    ]
  }
}
</script>
<style>

</style>
