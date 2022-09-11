<template>
	<button
		class="base-button"
		:class="{
			'base-button--fluid': fluid,
			'base-button--inverse': inverse,
		}">
		<slot />
	</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'BaseButton',
	props: {
		fluid: Boolean,
		inverse: Boolean,
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/flex";
@import "assets/styles/mixins/font";
@import "assets/styles/mixins/mq";

.base-button {
	height: var(--control-height);
	border: 1px solid transparent;
	outline: none;
	background: var(--secondary-color);
	border-radius: 9px;
	color: var(--white-color);
	text-transform: uppercase;
	font-family: var(--primary-font);
	padding: 20px 65px;
	white-space: nowrap;
	cursor: pointer;
	transition: all .13s ease-in-out;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

	@include flex-center;
	@include font(14, extra-bold);

	@include mq(tablet) {
		@include font(18);
	}

	&--fluid {
		width: 100%;
	}

	&--inverse {
		background-color: rgba(255, 255, 255, .2);
		border: 1px solid var(--white-color);
	}

	&--transparent {
		background-color: rgba(255, 255, 255, 0);
		border: 1px solid var(--white-color);

		&:hover {
			background-color: var(--secondary-color);
		}
	}
}
</style>
