<template>
	<div class="categories-section-bg">
		<i
			v-for="index in bgIconCount"
			:key="index"
			class="categories-section-bg__item" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'CategoriesSectionBg',
	computed: {
		bgIconCount(): number {
			return this.device.isMobile ? 3 : 1;
		},
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";

.categories-section-bg {
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: .1;

	&__item {
		background-image: url('assets/img/monogram--white.svg');
		background-position: center 58%;
		background-repeat: no-repeat;
		background-size: contain;

		@include size(100%);

		@include mq(tablet) {
			width: 80%;
		}

		@include mq(large-tablet) {
			width: 70%;
		}

		@include mq(desktop) {
			width: 60%;
		}

		@include mq(wide) {
			width: 58%;
		}
	}
}
</style>
