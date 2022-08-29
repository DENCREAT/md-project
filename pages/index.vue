<template>
	<div>
		<PageStarter
			css-class="page-starter--homepage"
			:bg-from-styles="true">
			<HomePageStarterInfo />
		</PageStarter>
		<AreasSection />
		<AboutMeSection />
		<AffairsSection />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import AboutMeSection from '~/components/AboutMeSection.vue';
import AffairsSection from '~/components/AffairsSection.vue';
import AreasSection from '~/components/AreasSection.vue';
import HomePageStarterInfo from '~/components/HomePageStarterInfo.vue';
import PageStarter from '~/components/PageStarter.vue';

export default Vue.extend({
	name: 'Index',
	components: { AffairsSection, AreasSection, AboutMeSection, HomePageStarterInfo, PageStarter },
});
</script>
