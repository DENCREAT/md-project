<template>
	<div>
		<AreasSection />
		<AboutMeSection />
		<AffairsSection />
		<CategoriesSection />
		<LeadGenerationSection />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import AboutMeSection from '~/components/AboutMeSection.vue';
import AffairsSection from '~/components/AffairsSection.vue';
import AreasSection from '~/components/AreasSection.vue';
import CategoriesSection from '~/components/CategoriesSection.vue';
import LeadGenerationSection from '~/components/LeadGenerationSection.vue';
import PageStarter from '~/components/PageStarter.vue';
import HomePageStarterInfo from '~/components/PageStarterHomepage.vue';

export default Vue.extend({
	name: 'Index',
	components: {
		LeadGenerationSection,
		CategoriesSection,
		AffairsSection,
		AreasSection,
		AboutMeSection,
		HomePageStarterInfo,
		PageStarter,
	},
});
</script>
