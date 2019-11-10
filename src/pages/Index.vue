<template>
  <Layout>
    <ul>
      <li v-for="article in $page.articles.edges" :key="article.id" class="article">
        <div>
          <div
            class="article__preview"
            :style="{ 'background-image': 'url(' + article.node.image + ')' }"
          ></div>
        </div>
        <a :href="article.node.path" class="article__link">
          <h1 class="article__title">{{article.node.title}}</h1>
          <p class="article__abstract">{{article.node.abstract}}</p>
          <div class="article__author">
            <p>{{article.node.author}}</p>
            <span class="mx-5"> - </span>
            <p>{{article.node.date}}</p>
          </div>
        </a>
      </li>
    </ul>

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
    </ul>-->
  </Layout>
</template>

<page-query>
query {
  articles: allArticles {
    edges {
      node {
        title
        abstract
        image
        link
        date
        author
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Not Only CSS"
  }
};
</script>

<style>
.article {
  background-color: #0e2d43;
  padding: 30px;
  color: #fff;
  margin-bottom: 50px;
  list-style: none;
  border-radius: 5px;
  display: flex;
}
.article__title {
  font-size: 30px;
  line-height: 34px;
  margin-top: 0;
}
.article__author {
  display: flex;
  align-items: center;
}
.mx-5 {
   margin-left: 5px;
  margin-right: 5px;
}
.article__author p {
 
  font-size: 12px;
  color: #f4f4f4;
}
.article__abstract {
  font-size: 20px;
  margin-bottom: 0px;
  overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}
.article__preview {
  width: 240px;
  height: 160px;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  margin-right: 30px;
}
.article__link {
  color: #fff;
  text-decoration: none;
}
</style>
