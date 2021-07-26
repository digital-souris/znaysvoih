<template>
  <div id="app">
    <div class="page">
      <div class="page__content">
        <main-header></main-header>
        <router-view/>
      </div>
      <div class="page__footer">
        <main-footer></main-footer>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    &__content {
      flex: 1 0 auto;
    }
    &__footer {
      flex: 0 0 auto;
    }
  }
</style>
<script>
  import MainHeader from "./components/layouts/MainHeader";
  import MainFooter from "./components/layouts/MainFooter";
  export default {
    components: {MainFooter, MainHeader},
    mounted() {
      this.$store.dispatch('getCart')
    }
  }
</script>