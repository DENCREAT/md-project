<template>
	<SectionWrapper
		:theme="SectionTheme.INFO">
		<template
			v-if="$hasSlot('title') || title"
			#title>
			<SectionTitle
				:uppercase="false"
				:self-center="true"
				tag="h3">
				<slot name="title">
					{{ title }}
				</slot>
			</SectionTitle>
		</template>

		<slot />
	</SectionWrapper>
</template>

<script lang="ts">
import Vue from 'vue';

import SectionTitle from '~/components/SectionTitle.vue';
import SectionWrapper from '~/components/SectionWrapper.vue';
import { SectionTheme } from '~/enums';

export default Vue.extend({
	name: 'InfoSection',
	components: { SectionWrapper, SectionTitle },
	props: {
		title: String,
	},
	data() {
		return {
			SectionTheme,
		};
	},
});
</script>

<style lang="scss" scoped>
</style>
