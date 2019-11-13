<template>
  <div class="layout">
    <header class="flex items-center justify-between py-6">
      <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
      <g-link to="/" class="nav__link">
        <g-image alt="Logo Not Only CSS" src="~/images/notonlycss.png" class="logo relative z-10" />
      </g-link>
      <div
        class="hamburger-container md:hidden z-10 relative flex items-center"
        @click="hamburger()"
      >
        <div class="hamburger"></div>
      </div>

      <nav class="nav">
        <g-link class="nav__link text-white mx-3" to="/snippets">Snippets</g-link>
        <g-link class="nav__link text-white mx-3" to="/events/">Events</g-link>
        <g-link class="nav__link text-white mx-3" to="/newsletter/">Newsletter</g-link>
        <g-link class="nav__link text-white ml-3" to="/about/">About</g-link>
      </nav>
    </header>
    <hr class="mb-16" />
    <div class="container">
      <slot />
    </div>

    <hr />
    <footer class="footer py-6 md:flex items-center justify-between text-center md:text-left">
      <p>
        Not Only CSS is proudly
        <br />running on
        <a href="https://www.netlify.com/" target="_blank">Netlify</a>.
      </p>
      <p class="py-3 md:py-0">
        <a href="mailto:info@notonlycss.com">Write for us</a>
      </p>
      <ul class="flex justify-center md:justify-end">
        <li>
          <a href="https://www.facebook.com/notOnlyCSS/" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li class="mx-3">
          <a href="https://twitter.com/NotOnlyCSS" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://medium.com/notonlycss" target="_blank">
            <i class="fab fa-medium-m"></i>
          </a>
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
hr {
  border-color: rgba(255, 255, 255, 0.2);
}
.footer__logo {
  width: 100px;
}
.logo {
  width: 200px;
}
.hamburger-container {
  width: 30px;
  height: 30px;
}
.hamburger {
  width: 26px;
  height: 1px;
  background-color: #fff;
  position: relative;
  z-index: 9;
  position: relative;
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
.nav a {
  font-size: 20px;
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
    z-index: 1;
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

body {
  font-family: "Roboto", sans-serif;
  background-color: #0c2437;
  color: #fff;
}

.layout {
  max-width: 960px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
}
@media screen and (max-width: 576px) {
  .layout {
    max-width: 100%;
  }
}
</style>
