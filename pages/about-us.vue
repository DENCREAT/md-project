<template>
	<div class="page page-about-me">
		<ReviewsSection />

		<AffairsSection />
		<LeadGenerationSection />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import AffairsSection from '~/components/AffairsSection.vue';
import BaseButton from '~/components/base/BaseButton.vue';
import ReviewsSection from '~/components/CertificatesSection.vue';
import LeadGenerationSection from '~/components/LeadGenerationSection.vue';

export default Vue.extend({
	name: 'AboutUs',
	components: { AffairsSection, LeadGenerationSection, ReviewsSection, BaseButton },
});
</script>
