// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.script.push({
    src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    body: true
  },
  {
    src: 'https://kit.fontawesome.com/97471774c6.js',
    body: true,
    crossorigin:"anonymous"
  })
 
}


       