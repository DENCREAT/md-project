<template>
	<section
		class="section"
		:class="`section--${theme}`">
		<div class="container section__container">
			<slot name="title">
				<SectionTitle
					:theme="theme"
					:title="title"
					:fluid="titleFluid"
					:center="titleCenter"
					class="section__title" />
			</slot>

			<div class="section__content">
				<slot />
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import SectionTitle from '~/components/SectionTitle.vue';
import { SectionTheme } from '~/enums';

export default Vue.extend({
	name: 'SectionWrapper',
	components: { SectionTitle },
	props: {
		title: String,
		theme: {
			type: String as PropType<SectionTheme>,
			default: SectionTheme.LIGHT,
		},
		titleFluid: Boolean,
		titleCenter: Boolean,
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/mq";

.section {
	$root: &;

	padding: var(--indent-4) 0;

	@include mq(desktop) {
		padding: var(--indent-9) 0;
	}

	&__container {
		display: flex;
		flex-direction: column;
		row-gap: var(--indent-3);

		@include mq(tablet) {
			row-gap: var(--indent-4);
		}

		@include mq(desktop) {
			row-gap: var(--indent-6);
		}

		@include mq(large-desktop) {
			row-gap: var(--indent-9);
		}
	}

	&--light {
		background-color: var(--bg-light-color);
	}

	&--accent {
		background-color: var(--secondary-color);
	}
}
</style>
