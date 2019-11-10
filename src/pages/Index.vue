<template>
  <Layout>
    <div id="medium-widget"></div>
    

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>
    <hr>
    manual
    <ul>
      <li>
        <g-link to="/blog-html/blog-post-one">Post 1</g-link>
      </li>
      <li>
        <g-link to="/blog-html/blog-post-two">Post 2</g-link>
      </li>
      <li>
        <g-link to="/blog-html/blog-post-three">Post 3</g-link>
      </li>
    </ul>

    <hr>
  dynamic
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path">
          {{post.node.title}}
        </g-link>
      </li>
    </ul>
    <hr>-->
    reddit
    <!-- <ul>
      <li class="article" v-for="postReddit in $page.redditPost.edges" :key="postReddit.id">
        <div>
          <div
            class="article__img"
            :style="{'background-image': 'url(' + postReddit.node.thumbnail + ')'}"
          ></div>
        </div>
        <div>
          <h1 class="article__title">{{postReddit.node.title}}</h1>
          <g-link :to="postReddit.node.link">Read</g-link>
        </div>
      </li>
    </ul> -->

    
    
  </Layout>
</template>

<page-query>

</page-query>
<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  mounted() {
    setTimeout(function(){ MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/notonlycss","postsPerLine":1,"limit":1000,"picture":"small","fields":["description","author","publishAt"],"ratio":"original"}}) }, 1000);
      
  }

};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
