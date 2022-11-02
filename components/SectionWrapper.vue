<template>
	<section
		class="section"
		:class="`section--${theme}`">
		<div class="container section__container">
			<slot name="title">
				<SectionTitle
					v-if="title"
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
@import "assets/styles/mixins/font";

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

	&--dark {
		background-color: var(--primary-light-color);
	}

	&--info {
		padding: 0;
		margin: var(--indent-4) 0;

		#{$root}__container {
			padding: var(--indent-5) var(--indent-2);
			row-gap: var(--indent-3);
			border: 1px solid var(--border-info-section-color);
			background-color: var(--bg-info-section-color);
			box-shadow: 0 4px 21px rgba(29, 36, 68, 0.12);

			@include mq(tablet) {
				row-gap: var(--indent-5);
			}

			@include mq(desktop) {
				padding: var(--indent-5) 120px;
				row-gap: var(--indent-5);
				max-width: calc(100% - var(--indent-2) * 2);
			}

			@include mq(large-desktop) {
				row-gap: var(--indent-5);
			}

			@include mq(wide) {
				max-width: calc(var(--container-width) - var(--indent-2) * 2);
			}
		}

		#{$root}__content {
			@include font(18, regular);
		}
	}
}
</style>
