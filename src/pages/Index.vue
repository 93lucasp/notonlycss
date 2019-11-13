<template>
  <Layout>
    <ul class="articles-list">
      <li v-for="article in $page.articles.edges" :key="article.id" class="article rounded mb-16 md:flex relative p-10">
        <div>
          <div
            class="article__preview rounded bg-cover bg-center md:mr-8"
            :style="{ 'background-image': 'url(' + article.node.image + ')' }"
          ></div>
        </div>
        <div>
          <h1 class="article__title text-2xl md:text-3xl font-bold leading-tight mb-4">{{article.node.title}}</h1>
          <p class="article__abstract text-lg md:text-xl mb-4">{{article.node.abstract}}</p>
          <div class="flex items-center mb-5 text-sm">
            <p>{{article.node.author}}</p>
            <span class="mx-2">-</span>
            <p>{{article.node.date}}</p>
          </div>
          <a :href="article.node.link" class="article__link py-2 px-10 rounded block text-center md:inline-block">Read</a>
        </div>
      </li>
    </ul>
    <div>
      <hr>
      <p class="py-8 text-center"> Our articles are published on Medium, we write for free and only Medium<br> through the <a href="https://medium.com/creators" target="_blank">Medium Partner Program</a> allows us to earn money for the<br> commitment.<br></p>
 
    </div>

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
    title: "Not Only CSS",
    meta: [
      { name: 'description', content: 'Articles and tips for frontend developers' },
      { property: 'og:title', content: 'Not Only CSS' },
      { property: 'og:description', content: 'Articles and tips for frontend developers' },
      { property: 'og:image', content: 'https://www.notonlycss.com/uploads/share.png' },
      { property: 'og:url', content: 'https://www.notonlycss.com' },
      { name: 'robots', content: 'index, follow' },
    ]
  }
};
</script>

<style>
/* .pre-footer {
  text-align: center;
  margin: 140px auto 20px;
} */
/* .pre-footer p{
  margin-bottom: 0;
}
.pre-footer a{
 color: #fff;
} */
.article {
  background-color: #0e2d43;
  /* padding: 30px; */
  /* color: #fff;
  margin-bottom: 50px; */
  /* list-style: none; */
  /* border-radius: 5px; */
  /* display: flex;
  position: relative; */
  transition: all 0.2s;
}
/* .article:hover {
  background-color:#123954;
} */
.article__link {

  background-color: #123954;
  transition: all .2s;
  border: 1px solid transparent;
}
.article__link:hover {
  border: 1px solid #fff;
  background-color: #0c2437;
}

.article__title {
  
}
/* @media screen and (max-width: 576px) {
  .article__title {
    font-size: 20px;
    line-height: 34px;
    margin-top: 0;
  }
} */
.article__author {
  /* display: flex;
  align-items: center;
  margin-bottom: 15px; */
}
/* .mx-5 {
  margin-left: 5px;
  margin-right: 5px;
} */
.article__author p {
  /* font-size: 12px;
  color: #f4f4f4; */
}
.article__abstract {
  /* font-size: 20px;
  margin-bottom: 0px; */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
/* @media screen and (max-width: 576px) {
  .article__abstract {
    font-size: 16px;
  }
} */
.article__preview {
  width: 240px;
  height: 160px;
  /* border-radius: 5px; */
}
@media screen and (max-width: 576px) {
  .article__preview {
    width: 100%;
    height: 160px;
    margin-bottom: 30px;
  }
}

</style>
