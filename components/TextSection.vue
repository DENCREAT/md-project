<template>
	<SectionWrapper>
		<template
			v-if="title"
			#title>
			<SectionTitle
				:uppercase="false"
				tag="h3">
				{{ title }}
			</SectionTitle>
		</template>

		<div class="text-content">
			<slot>
				<div v-html="text" />
			</slot>
		</div>
	</SectionWrapper>
</template>

<script lang="ts">
import Vue from 'vue';

import SectionTitle from '~/components/SectionTitle.vue';
import SectionWrapper from '~/components/SectionWrapper.vue';

export default Vue.extend({
	name: 'TextSection',
	components: { SectionWrapper, SectionTitle },
	props: {
		title: String,
		text: String,
	},
});
</script>

<style lang="scss" scoped>

</style>
