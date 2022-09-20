<template>
	<div
		v-image-dialog="image.url"
		class="base-interactive-image">
		<i class="base-interactive-image__icon icon-plus" />

		<img
			:src="image.preview || image.url"
			:alt="image.altText"
			class="responsive-image">
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { Image } from '~/interfaces';

export default Vue.extend({
	name: 'BaseInteractiveImage',
	props: {
		image: {
			type: Object as PropType<Image>,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/flex';

$border-size: var(--base-indent);

.base-interactive-image {
	$root: &;
	position: relative;
	height: 305px;
	border: $border-size solid #A6B0D6;
	box-shadow: 0 3px 10px rgba(14, 14, 14, 0.3);
	transition: var(--fast-transition);
	cursor: pointer;
	background: var(--bg-light-color);

	@include flex-center;

	&__icon {
		font-size: 20px;
		color: var(--white-color);
		position: absolute;
		left: -1px;
		top: -1px;
		right: -1px;
		bottom: -1px;
		outline: calc(#{$border-size} / 2) solid var(--white-color);
		outline-offset: -8px;
		background: rgba(var(--secondary-color-rgb), .8);
		opacity: 0;
		transition: var(--fast-transition);

		@include flex-center;
	}

	&:hover {
		border-color: transparent;
		border-width: 0;
		transform: scale(1.03);
		box-shadow: 0 3px 20px rgba(14, 14, 14, 0.3);

		#{$root}__icon {
			opacity: 1;
			font-size: 26px;
			outline-offset: -24px;
		}
	}
}
</style>
