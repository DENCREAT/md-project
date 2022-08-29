<template>
	<section
		class="section"
		:class="`section--${theme}`">
		<div class="container section__container">
			<h2 class="section__title">
				{{ title }}
			</h2>

			<div class="section__content">
				<slot />
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { SectionTheme } from '~/enums';

export default Vue.extend({
	name: 'SectionWrapper',
	props: {
		title: String,
		theme: {
			type: String as PropType<SectionTheme>,
			default: SectionTheme.LIGHT,
		},
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/font";
@import "assets/styles/mixins/size";

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

	&__title {
		max-width: 420px;
		text-transform: uppercase;

		@include font(24, bold);

		@include mq(large-mobile) {
			@include font(30);
		}

		@include mq(desktop) {
			@include font(32);
		}

		&:after {
			content: '';
			margin-top: var(--indent-3);
			display: block;
			border-radius: 4px;

			@include size(100%, 4px);
		}
	}

	@mixin set-section-theme($bg, $color, $border) {
		background-color: var($bg);

		#{$root}__title {
			color: var($color);

			&::after {
				background-color: var($border);
			}
		}
	}

	&--light {
		@include set-section-theme(--bg-light-color, --primary-title-text-color, --secondary-color);
	}

	&--accent {
		@include set-section-theme(--secondary-color, --white-color, --white-color);
	}
}
</style>
