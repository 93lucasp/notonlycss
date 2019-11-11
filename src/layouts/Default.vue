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
     <hr class="hr-header">
    <slot />
    <div class="pre-footer">
      <hr>
      <p> Our articles are published on Medium, we write for free and only Medium<br> through the <a href="https://medium.com/creators" target="_blank">Medium Partner Program</a> allows us to earn money for the<br> commitment.<br></p>
     
      <hr>
    </div>
    <footer class="footer">
      
      <p class="footer__text col">
          Not Only CSS is proudly <br>running on <a href="https://www.netlify.com/" target="_blank">Netlify</a>.
        </p>
        <p class="col text-center"><a href="mailto:notonlycss@gmail.com">Write for us</a></p>
      <ul class="footer__social col text-right">
        <li>
          <a href="https://www.facebook.com/notOnlyCSS/" target="_blank"><i class="fab fa-facebook-f"></i></a>
        </li>
        <li>
          <a href="https://medium.com/notonlycss" target="_blank"><i class="fab fa-medium-m"></i></a>
        </li>
      </ul>
    </footer>
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
.hr-header {
  margin-bottom: 100px;
}
.col {
  width: 33.33%;
  
}
@media screen and (max-width: 576px) {
  .col {
    width: 100%;
  }
}
.text-center {
  text-align: center;
}

.pre-footer {
  text-align: center;
  margin: 100px auto;
}
.pre-footer a{
 color: #fff;
}
hr{
 border-color: rgba(255,255,255,.2);
}
.footer__social {
  display: flex;
  list-style: none;
  justify-content: flex-end;
}
@media screen and (max-width: 576px) {
  .footer__social {
  
  justify-content: center;
}
}
.footer__social li{
  margin: 0 8px;
}
.footer {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 576px) {
  .footer {
    display: block;
    text-align: center;
  }
}
.footer a {
  color: #fff;
}
.footer__logo {
  width: 100px;
}
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
