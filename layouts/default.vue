<template>
	<div class="page-wrapper">
		<TheHeader />

		<main class="page-wrapper__content">
			<Nuxt />
		</main>

		<TheFooter />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import TheFooter from '~/components/layout/TheFooter.vue';
import TheHeader from '~/components/layout/TheHeader.vue';

export default Vue.extend({
	name: 'Default',
	components: {
		TheHeader,
		TheFooter,
	},
});
</script>
