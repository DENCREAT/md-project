<template>
	<div
		class="area-item"
		:style="{ 'background-image': `url(${data.bgUrl})` }">
		<div class="area-item__title">
			{{ data.title }}
		</div>

		<div class="area-item__footer">
			<BaseButton :transparent="true">
				{{ learnMore }}
			</BaseButton>

			<i class="area-item__icon">
				<img
					:src="data.iconUrl"
					alt="">
			</i>
		</div>
	</div>
</template>

<script lang="ts">
import { mapState } from 'pinia';

import BaseButton from '~/components/base/BaseButton.vue';
import { useStaticStore } from '~/store/static';

export default {
	name: 'AreaItem',
	components: { BaseButton },
	props: {
		data: {
			type: Object,
			default: () => ({}),
		},
	},
	computed: {
		...mapState(useStaticStore, ['learnMore']),
	},
};
</script>

<style lang="scss" scoped>
@use "sass:math";
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/flex";
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";
@import "assets/styles/mixins/font";

.area-item {
	$root: &;

	display: flex;
	flex-direction: column;
	padding: var(--indent-4);
	color: var(--white-color);
	background-size: cover;
	transition: var(--fast-transition);

	&:hover {
		box-shadow: inset 0 0 0 5px var(--secondary-color);
	}

	&__title {
		flex-grow: 1;
		padding: calc(var(--indent-2) * 1.5) 0;
		max-width: 240px;
		text-transform: uppercase;

		@include font(20, bold);

		@include mq(large-mobile) {
			@include font(24);
		}

		@include mq(tablet) {
			padding: 60px 0;
			max-width: 320px;
		}
	}

	&__icon {
		display: none;

		@include size(36px);

		@include mq(large-mobile) {
			@include flex-center;
		}
	}

	&__footer {
		column-gap: 15%;
		justify-content: space-between;

		@include flex-v-center;
	}
}
</style>
