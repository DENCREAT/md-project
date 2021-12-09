<template>
	<MainLayout>
		<template #starterContent>
			<PageStarter>
				<div class="home-page__starter">
					<HomePageStarterInfo class="home-page__starter-info" />
					<div class="home-page__starter-image">
						<div class="img-wrapper">
							<img src="/images/monogram-min.svg" alt="" class="mono">
						</div>
						<img src="~/assets/img/main-photo.png" alt="" class="main">
					</div>
				</div>
			</PageStarter>
		</template>

		<template #content>
			<Areas />
			<AboutMe />
			<Affairs />
		</template>
	</MainLayout>
</template>

<script lang="ts">
import Vue from 'vue';

import AboutMe from '~/components/AboutMe.vue';
import Affairs from '~/components/Affairs.vue';
import Areas from '~/components/Areas.vue';
import HomePageStarterInfo from '~/components/HomePageStarterInfo.vue';
import MainLayout from '~/components/MainLayout.vue';
import PageStarter from '~/components/PageStarter.vue';

export default Vue.extend({
	name: 'Index',
	data() {
		return {
		};
	},
	components: { Affairs, Areas, AboutMe, MainLayout, HomePageStarterInfo, PageStarter }
});
</script>

<style lang="scss">
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";
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
      position: relative;
      display: flex;
      height: 100%;
      min-height: calc(100vh - 112px);
    }

    &__starter-info,
    &__starter-image {

      @include mq(tablet) {
        width: 50%;
      }
    }

    &__starter-image {
      position: absolute;
      z-index: 0;
      bottom: 0;
      display: flex;
      justify-content: flex-end;
      width: 125%;
      left: 15%;

      img.main {
        max-width: 100%;
      }
      .img-wrapper {
        display:flex;
        @include size(270px);
        left: 20px;
        //position: absolute;
      }
      img.mono {
        position: relative;
        left: 180px;
        top: 20px;
        z-index: -1;
       //display: block;left: 20px
      }
    }
  }
</style>
