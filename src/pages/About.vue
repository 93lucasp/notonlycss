<template>
  <Layout>
    <h1 class="title__page">About us</h1>
    <p class="description__page description__page--noBottom">Our mission is to help frontend developers to improve their knowledges. <br> We provide articles, snippets of animations, online events and weekly newsletter to keep you updated. </p>
    <p class="description__page">Our articles are published on Medium, we write for free and only Medium through the <a href="https://medium.com/creators" target="_blank">Medium Partner Program</a> allows us to earn money for the commitment.<br></p>
    <h1 class="title__page">Follow Not Only CSS on social networks </h1>
    <ul class="social description__page">
      <li>
          <a href="https://www.facebook.com/notOnlyCSS/" target="_blank"><i class="fab fa-facebook-f"></i></a>
        </li>
        <li>
          <a href="https://twitter.com/NotOnlyCSS" target="_blank"><i class="fab fa-twitter"></i></a>
        </li>
        <li>
          <a href="https://medium.com/notonlycss" target="_blank"><i class="fab fa-medium-m"></i></a>
        </li>
    </ul>
     <h1 class="title__page">Write for us</h1>
    <p class="description__page ">We are always looking for talended writers, if you would like to write for us just drom us few line <a href="mailto:info@notonlycss.com">here</a> </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
<style>
    .social {
      display: flex;
      list-style: none;
    }
    .social li{
      margin-right: 30px;
      
    }
    .social a{
      color: #fff;

    }
    .social a i{
      font-size: 26px;
    }
</style>