<template>
  <div class="layout">
    <header class="header">
      <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
      <g-link to="/" class="nav__link">
        <g-image alt="Logo Not Only CSS" src="~/images/notonlycss.png" class="logo" />
      </g-link>
      <div class="hamburger" @click="hamburger()"></div>
      <nav class="nav">
        <g-link class="nav__link" to="/snippets">Snippets</g-link>
        <g-link class="nav__link" to="/events/">Events</g-link>
        <g-link class="nav__link" to="/newsletter/">Newsletter</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  methods: {
    hamburger: function(el) {
      $(".hamburger").toggleClass("hamburger--active");
      $("nav").toggleClass("nav--active");
    }
  }
};
</script>
<style>
.logo {
  width: 200px;
  z-index: 9;
  position: relative;
}
.nav__link {
  line-height: 0;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
}
.hamburger {
  display: none;
  width: 26px;
  height: 1px;
  background-color: #fff;
  position: relative;
  z-index: 9;
  position: relative;
}
@media screen and (max-width: 576px) {
  .hamburger {
  display: block;
}
}

.hamburger--active {
  background-color: transparent;
}
.hamburger::before {
  content: "";
  width: 30px;
  height: 1px;
  background-color: #fff;
  top: -8px;
  position: absolute;
  transition: all 0.2s;
}
.hamburger::after {
  content: "";
  width: 30px;
  height: 1px;
  background-color: #fff;
  top: 8px;
  position: absolute;
  transition: all 0.2s;
}

.hamburger--active::before {
  background-color: #fff;
  top: 0;
  transform: rotate(45deg);
}
.hamburger--active::after {
  background-color: #fff;
  top: 0;
  transform: rotate(-45deg);
}
@media screen and (max-width: 576px) {
  .nav {
    visibility: hidden;
    position: fixed;
    left: -100%;
    transition: all 0.2s;
    top: 0;
    width: 100%;
    bottom: 0;
    background-color: #0c2437;
    padding-top: 100px;
    opacity: 0;
  }
  .nav a {
  display: block;
  padding: 30px;
  font-size: 26px;
}
}
.nav--active {
  visibility: visible;
  opacity: 1;
  left: 0;
}

header a {
  margin: 0 15px;
  color: #fff;
  text-decoration: none;
}
header a:first-child {
  margin-left: 0;
}
@media screen and (max-width: 576px) {
  header a:first-child {
    margin-left: 15px;
  }
}
header a:last-child {
  margin-right: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: #0c2437;
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
  margin: 0;
}
.layout {
  max-width: 860px;

  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
}
@media screen and (max-width: 576px) {
  .layout {
    max-width: 100%;
  }
}
ul {
  padding: 0;
}
</style>
