<template>
	<MainLayout>
		<template #starterContent>
			<PageStarter :cssClass="'homepage-starter'" :bgFromStyles="true">
				<HomePageStarterInfo />
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
</style>
