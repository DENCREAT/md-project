<template>
	<MainLayout>
		<template #starterContent>
			<PageStarter>
				<div class="home-page__starter">
					<HomePageStarterInfo class="home-page__starter-info" />
					<div class="home-page__starter-image">
						<!--            <img src="~/assets/img/main-photo.png" alt="">-->
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
	components: { Affairs, Areas, AboutMe, MainLayout, HomePageStarterInfo, PageStarter }
});
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
