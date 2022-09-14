<template>
	<div class="page-starter-text">
		<h1 class="page-starter-text__title">
			<slot name="title" />
		</h1>

		<div class="page-starter-text__description text-content">
			<slot name="description" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'PageStarterText',
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/font';
@import 'assets/styles/mixins/mq';

.page-starter-text {
	display: flex;
	flex-direction: column;
	row-gap: var(--indent-2);
	color: var(--white-color);

	@include mq(tablet) {
		row-gap: var(--indent-3);
	}

	&__title {
		@include font(26, bold);

		@include mq(tablet) {
			@include font(32);
		}

		@include mq(large-tablet) {
			@include font(34);
		}
	}

	&__description {
		text-shadow: 2px 2px 20px rgba(var(--black-color-rgb), 1);

		@include font(16, regular);

		@include mq(tablet) {
			@include font(18);
		}
	}
}
</style>
