<template>
	<button class="btn">
		<slot />
	</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'MDBtn',
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/flex";
@import "assets/styles/mixins/font";
@import "assets/styles/mixins/mq";

.btn {
	height: 60px;
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

	@include flex-center;
	@include font(14, extra-bold);

	@include mq(tablet) {
		@include font(18);
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
