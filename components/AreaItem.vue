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
			default: () => {
			},
		},
	},
};
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/flex";
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";
@import "assets/styles/mixins/font";

.area-item {
	$root: &;
	padding: 35px 55px 35px 30px;
	color: var(--white-color);
	background-size: cover;

	&__title {
		padding: 60px 0;
		max-width: 240px;
		text-transform: uppercase;

		@include font(24, bold);

		@include mq(tablet) {
			max-width: 320px;
		}
	}

	&__icon {
		@include size(36px);
		@include flex-center;
	}

	&__footer {
		column-gap: 17%;

		@include flex-v-center;
	}

	&__btn {
		flex-grow: 1;
		padding: 0 30px;

		#{$root}:deep(&) {
			height: 48px;
		}

		@include mq(tablet) {
			padding: 0 40px;
		}
	}
}
</style>
