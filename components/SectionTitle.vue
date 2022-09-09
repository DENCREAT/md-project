<template>
	<component
		:is="tag"
		:class="{
			'section-title--fluid': fluid,
			'section-title--center': center,
			[`section-title--${theme}`]: !!theme,
			[`section-title--${tag}`]: !!tag
		}"
		class="section-title">
		{{ title }}
	</component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { SectionTheme, TitleTag } from '~/enums';

export default Vue.extend({
	name: 'SectionTitle',
	props: {
		title: String,
		fluid: Boolean,
		center: Boolean,
		theme: {
			type: String as PropType<SectionTheme>,
			default: SectionTheme.LIGHT,
		},
		tag: {
			type: String as PropType<TitleTag>,
			default: TitleTag.H2,
		},
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/font";
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";

@mixin set-section-title-theme($color, $border) {
	color: var($color);

	&::after {
		background-color: var($border);
	}
}

.section-title {
	--line-size: initial;
	max-width: 420px;

	&:after {
		content: '';
		margin-top: var(--indent-3);
		display: block;
		border-radius: var(--line-size);

		@include size(100%, #{var(--line-size)});
	}

	&--h2 {
		--line-size: 4px;
		text-transform: uppercase;

		@include font(24, bold);

		@include mq(large-mobile) {
			@include font(30);
		}

		@include mq(desktop) {
			@include font(32);
		}
	}

	&--h3 {
		--line-size: 3px;

		@include font(22, bold);
	}

	&--fluid {
		max-width: none;
	}

	&--center {
		text-align: center;
	}

	&--light {
		@include set-section-title-theme(--primary-title-text-color, --secondary-color);
	}

	&--accent {
		@include set-section-title-theme(--white-color, --white-color);
	}
}
</style>
