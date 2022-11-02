<template>
	<div class="page page-contacts">
		<LeadGenerationSection />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import LeadGenerationSection from '~/components/LeadGenerationSection.vue';

export default Vue.extend({
	name: 'Bono',
	components: { LeadGenerationSection },
});
</script>
