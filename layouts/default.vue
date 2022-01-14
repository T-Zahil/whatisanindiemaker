<template>
  <div class="w-full min-h-screen overflow-hidden bg-orange-100 max-w-screen">
    <Nuxt />
    <a href="https://www.producthunt.com/posts/what-is-an-indie-maker?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-what-is-an-indie-maker" target="_blank"><img
      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=326576&theme=light"
      alt="What is an Indie Maker? - Are you tired of explaining what an indie maker is? | Product Hunt"
      style="width: 250px; height: 54px;"
      width="250"
      height="54"
      class="fixed top-2 left-2"
    ></a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout'
})
</script>
