<template>
	<div class="base-image-carousel">
		<VueSlickCarousel
			ref="carousel"
			v-bind="settings">
			<div
				v-for="item in items"
				:key="item.image.preview"
				class="base-image-carousel__item">
				<BaseInteractiveImage
					:image="item.image"
					class="base-image-carousel__image" />

				<div
					v-if="item.label"
					class="base-image-carousel__text">
					{{ item.label }}
				</div>
			</div>
		</VueSlickCarousel>
	</div>
</template>

<script lang="ts">
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

import Vue, { PropType, VueConstructor } from 'vue';
import VueSlickCarousel from 'vue-slick-carousel';

import BaseInteractiveImage from '~/components/base/BaseInteractiveImage.vue';
import { VueSlickSettings } from '~/interfaces';

export default (Vue as VueConstructor<Vue & {
	$refs: {
		carousel: InstanceType<typeof VueSlickCarousel>,
	}
}>).extend({
	name: 'BaseImageCarousel',
	components: { BaseInteractiveImage, VueSlickCarousel },
	props: {
		items: {
			type: Array as PropType<object>,
			default: () => [],
		},
	},
	data() {
		return {
			settings: {
				arrows: false,
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true,
				responsive: [
					{
						breakpoint: 1367,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
						},
					},

					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						},
					},

					{
						breakpoint: 769,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						},
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
				],
			} as VueSlickSettings,
		};
	},
	methods: {
		next(): void {
			this.$refs.carousel.next();
		},
		prev(): void {
			this.$refs.carousel.prev();
		},
	},
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/size';
@import 'assets/styles/mixins/font';
@import 'assets/styles/mixins/flex';
@import 'assets/styles/mixins/mq';

.base-image-carousel {
	$gap: 48px;

	&__item {
		color: #A6B0D6;
		transition: var(--fast-transition);

		&:hover {
			color: var(--white-color)
		}
	}

	&__image {
		height: 400px;

		@include mq(tablet) {
			height: 250px;
		}

		@include mq(large-tablet) {
			height: 305px;
			margin-bottom: var(--base-indent);
		}
	}

	&__text {
		margin-top: var(--indent-5);
		text-align: center;
		text-transform: uppercase;

		@include font(20, bold);
	}

	::v-deep(.slick-track) {
		display: flex;
		margin-top: var(--base-indent);
	}

	::v-deep(.slick-list) {
		margin: 0 -#{$gap};
	}

	::v-deep(.slick-slide) {
		margin: 0 $gap;
	}
}
</style>
