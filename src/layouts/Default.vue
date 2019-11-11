<template>
  <div class="layout">
    <header class="header">
    
        <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
        <g-link to="/"><g-image alt="Logo Not Only CSS" src="~/images/notonlycss.png" class="logo" /></g-link>
    
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
.logo{
  width: 200px;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 30px 0 120px;
}
header a {
  margin:0 15px;
  color: #fff;
  text-decoration: none;
}
header a:first-child {margin-left: 0}
header a:last-child {margin-right: 0}
body {
  font-family: 'Roboto', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #0C2437;
  color: #fff;
}

.description__page {
  font-size: 18px;
  margin-bottom: 60px;
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
ul {
  padding: 0;
}
</style>
