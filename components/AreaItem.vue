<template>
	<div
		class="area-item"
		:style="{ 'background-image': `url(${data.bgUrl})` }">
		<div class="area-item__title">
			{{ data.title }}
		</div>
		<div class="area-item__footer">
			<MDBtn class="btn--transparent area-item__btn">
				Узнать больше
			</MDBtn>

			<i class="area-item__icon">
				<img
					:src="data.iconUrl"
					alt="">
			</i>
		</div>
	</div>
</template>


<script>
export default {
	name: 'AreaItem',
	props: {
		data: {
			type: Object,
			default: () => ({}),
		},
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

	padding: calc(var(--base-indent) * 2);
	color: var(--white-color);
	background-size: cover;
	transition: box-shadow .13s ease;

	&:hover {
		box-shadow: inset 0 0 0 5px var(--secondary-color);
	}

	&__title {
		padding: calc(var(--base-indent) * 1.5) 0;
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
		column-gap: 5%;
		justify-content: space-between;

		@include flex-v-center;

		@include mq(tablet) {
			column-gap: 17%;
		}
	}

	&__btn {
		flex-grow: 1;
		padding: 0 30px;

		@include mq(large-mobile) {
			max-width: 230px;
		}

		@include mq(tablet, true) {
			#{$root}::v-deep & {
				height: 48px;
			}
		}

		@include mq(tablet) {
			padding: 0 40px;
		}

		&:hover {
			box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
		}
	}
}
</style>
