<template>
	<div class="affair-item">
		<div
			class="affair-item__content"
			:style="{ ...bgStyles }">
			<div class="affair-item__title">
				{{ data.title }}
			</div>
		</div>
		<div class="affair-item__footer">
			<a
				href="/static"
				class="affair-item__link">Подробнее</a>
		</div>
	</div>
</template>


<script>
export default {
	name: 'AffairItem',
	props: {
		data: {
			type: Object,
			default: () => {
			},
		},
	},
	computed: {
		bgStyles() {
			return {
				'background-image': `url(${this.data.imgUrl})`,
				'background-size': 'cover',
				'background-repeat': 'no-repeat',
			};
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

.affair-item {
	display: flex;
	padding: 9px 9px 0 9px;
	flex-direction: column;
	height: 360px;
	background-color: var(--primary-color);
	color: var(--white-color);

	@include mq(large-mobile) {
		height: 400px;
	}

	@include mq(tablet) {
		height: 455px;
	}

	&__title {
		position: relative;
		z-index: 1;
		padding: 20px 20px 60px 20px;

		@include font(20, bold);
	}

	&__content {
		align-items: flex-end;
		text-align: center;
		flex-grow: 1;

		@include flex-h-center;
	}

	&__footer {
		height: 70px;

		@include flex-center;
	}

	&__link {
		text-transform: uppercase;

		@include font(16, bold);
	}
}
</style>
