<template>
  <Layout>
    <h1 class="text-3xl md:text-4xl font-bold mb-3">About us <i class="far fa-address-card ml-2 text-2xl"></i></h1>
    <p class="text-lg md:text-xl mb-2">Our mission is to help <b>Frontend Developers</b> to improve their knowledges. <br> We provide <b>articles, snippets of animations, online events and weekly newsletter to keep you updated</b>. </p>
    <p class="text-lg md:text-xl mb-12">Our articles are published on Medium, we write for free and only Medium through the <a href="https://medium.com/creators" target="_blank" rel="noopener noreferrer" class="underline">Medium Partner Program</a> allows us to earn money for the commitment.<br></p>
    <h1 class="text-3xl md:text-4xl font-bold mb-3">Follow Not Only CSS  <i class="fas fa-book-reader ml-2 text-2xl"></i></h1>
    <ul class="flex items-center mb-12">
      <li>
          <a href="https://www.facebook.com/notOnlyCSS/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f md:text-3xl"></i></a>
        </li>
        <li class="mx-4">
          <a href="https://twitter.com/NotOnlyCSS" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter md:text-3xl"></i></a>
        </li>
        <li>
          <a href="https://medium.com/notonlycss" target="_blank" rel="noopener noreferrer"><i class="fab fa-medium-m md:text-3xl"></i></a>
        </li>
    </ul>
     <h1 class="text-3xl md:text-4xl font-bold mb-3">Write for us <i class="fas fa-pencil-alt ml-2 text-2xl"></i></h1>
    <p class="text-lg md:text-xl mb-16">We are always looking for talended writers, if you would like to write for us just drom us few line <a href="mailto:info@notonlycss.com" class="underline font-bold">here</a> </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
    meta: [
      { name: 'description', content: 'Articles, snippets, events and newsletter for frontend developers' },
      { property: 'og:title', content: 'Not Only CSS | About' },
      { property: 'og:description', content: 'Articles and tips for frontend developers' },
      { property: 'og:image', content: 'https://www.notonlycss.com/uploads/share.png' },
      { property: 'og:url', content: 'https://www.notonlycss.com/about' },
      {
        property: "twitter:card",
        content: "summary"
      },
      {
        property: "twitter:title",
        content: "Not Only CSS | About"
      },
      {
        property: "og:description",
        content: "Articles, snippets, events and newsletter for frontend developers"
      },
      {
        property: "twitter:image",
        content: "https://www.notonlycss.com/uploads/share.png"
      },
    ]
  }
}
</script>
<style>
   
</style>