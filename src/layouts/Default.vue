<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/snippets">Snippets</g-link>
        <g-link class="nav__link" to="/events/">Events</g-link>
        <g-link class="nav__link" to="/newsletter/">Newsletter</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #0C2437;
}
.medium-widget-article__title {
  font-size: 30px!important;
  line-height: 34px;
}
.medium-widget-article__description {
 font-size: 20px!important;
 margin-bottom: 30px;
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
ì.medium-widget-article__clap::before, .medium-widget-article__likeì::before {
  color: #fff!important;
}
.medium-widget-article__image img {
  border-radius: 5px;
  /* width: 200px!important; */
}
/* .article__img {
  width: 200px;
  height: 180px;
  background-position: center;
  background-size: cover;
   border-radius: 5px;
   margin-right: 30px;

} */
.article__title {
  margin:0;

}
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

</style>
