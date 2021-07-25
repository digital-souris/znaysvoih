<template>
  <div id="app">
    <main-header></main-header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <main-footer></main-footer>
  </div>
</template>

<style lang="scss">
</style>
<script>
  import MainHeader from "./components/layouts/MainHeader";
  import MainFooter from "./components/layouts/MainFooter";
  export default {
    components: {MainFooter, MainHeader}
  }
</script>