<template>
	<component
		:is="tag"
		:class="{
			'section-title--fluid': fluid,
			'section-title--center': center,
			'section-title--self-center': selfCenter,
			'section-title--uppercase': uppercase,
			[`section-title--${theme}`]: !!theme,
			[`section-title--${tag}`]: !!tag,
		}"
		class="section-title">
		<div class="section-title__text">
			<slot>
				<span v-html="title" />
			</slot>
		</div>

		<div
			class="section-title__line"
			:style="lineStyles" />
	</component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { SectionTheme, TitleTag } from '~/enums';
import { CssRuleset } from '~/types';

export default Vue.extend({
	name: 'SectionTitle',
	props: {
		title: String,
		fluid: Boolean,
		center: Boolean,
		selfCenter: Boolean,
		uppercase: {
			type: Boolean,
			default: true,
		},
		theme: {
			type: String as PropType<SectionTheme>,
			default: SectionTheme.LIGHT,
		},
		tag: {
			type: String as PropType<TitleTag>,
			default: TitleTag.H2,
		},
		lineStyles: {
			type: Object as PropType<CssRuleset>,
			default: () => ({}),
		},
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/font";
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";

@mixin set-section-title-theme($color, $line-color, $parent) {
	color: var($color);

	#{$parent}__line {
		background-color: var($line-color);
	}
}

.section-title {
	$root: &;
	--line-size: 3px;

	max-width: 420px;

	&__line {
		margin-top: var(--indent-3);
		border-radius: var(--line-size);

		@include size(100%, #{var(--line-size)});
	}

	&--h1 {
		@include font(30);

		@include mq(tablet) {
			@include font(34);
		}
	}

	&--h2 {
		@include font(24, bold);

		@include mq(desktop) {
			@include font(32);
		}
	}

	&--h3 {
		@include font(22, bold);
	}

	&--uppercase {
		text-transform: uppercase;
	}

	&--fluid {
		max-width: none;
	}

	&--center {
		text-align: center;
	}

	&--self-center {
		margin: 0 auto;
		max-width: none;
		width: fit-content;

		#{$root}__text {
			@include mq(tablet) {
				padding: 0 var(--indent-8);
			}
		}
	}

	&--light {
		@include set-section-title-theme(--primary-text-color, --secondary-color, $root);
	}

	&--accent {
		@include set-section-title-theme(--white-color, --white-color, $root);
	}

	&--dark {
		@include set-section-title-theme(--white-color, --secondary-color, $root);
	}
}
</style>
