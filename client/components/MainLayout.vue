<template>
  <div class="page-wrapper home-page">
    <Header class="header"/>
    <main class="main">
      <slot name="starterContent"/>
      <slot name="content"/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageStarter from "~/components/PageStarter.vue";
import Header from '~/components/Header.vue';

export default Vue.extend({
  components: { Header, PageStarter }

})
</script>
<style lang="scss" scoped>

</style>
