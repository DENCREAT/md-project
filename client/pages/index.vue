<template>
  <MainLayout>
    <template #starterContent>
      <PageStarter>
        <div class="home-page__starter">
          <HomePageStarterInfo class="home-page__starter-info"/>
          <div class="home-page__starter-image">
<!--            <img src="~/assets/img/main-photo.png" alt="">-->
          </div>
        </div>
      </PageStarter>
    </template>

    <template #content>
      <Areas />
      <AboutMe />
    </template>

  </MainLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import PageStarter from "~/components/PageStarter.vue";
import Header from "~/components/Header.vue";
import HomePageStarterInfo from '~/components/HomePageStarterInfo.vue';
import MainLayout from '~/components/MainLayout.vue';
import AboutMe from '~/components/AboutMe.vue';
import Areas from '~/components/Areas.vue';

export default Vue.extend({
  components: {Areas, AboutMe, MainLayout, HomePageStarterInfo, Header, PageStarter }
})
</script>

<style lang="scss">
  .page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .header {
    position: absolute;
    width: 100%;
  }

  .main {
    flex-grow: 1;
  }

  .home-page {
    &__starter {
      display: flex;
    }

    &__starter-info,
    &__starter-image {
      width: 50%;
    }

    &__starter-image {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
