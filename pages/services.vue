<template>
	<div>
		<LeadGenerationSection />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import LeadGenerationSection from '~/components/LeadGenerationSection.vue';

export default Vue.extend({
	name: 'Services',
	components: { LeadGenerationSection },
});
</script>
