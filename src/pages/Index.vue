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
    title: "Not Only CSS"
  },
  mounted() {
    setTimeout(function(){ MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/notonlycss","postsPerLine":1,"limit":1000,"picture":"small","fields":["description","author","publishAt"],"ratio":"original"}}) }, 1000);
      
  }

};
</script>

<style>
.medium-widget-article__title {
  font-size: 30px!important;
  line-height: 34px;
}
.medium-widget-article__description {
 font-size: 20px!important;
 margin-bottom: 30px;
}
.medium-widget-article__item {
  padding: 0!important;

}
.medium-widget-article__row {
  margin:initial!important;
  margin-bottom: 50px!important;
}
.medium-widget-article__row {
  background-color: #0E2D43;
  padding: 30px;
  color: #fff;
  margin-bottom: 50px;
  list-style: none;
  border-radius: 5px;
  display: flex;
   color: #fff;
}
.medium-widget-article__date, .medium-widget-article__clap, .medium-widget-article__like, .medium-widget-article__author-name,.medium-widget-article__description, .medium-widget-article__row a {
  color: #fff!important;
}
.medium-widget-article__clap::before, .medium-widget-article__likeì::before {
  color: #fff!important;
}
.medium-widget-article__image img {
  border-radius: 5px;
  /* width: 200px!important; */
}
</style>
