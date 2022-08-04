<template>
	<div class="achievement">
		<div class="achievement__header">
			{{ achievement.count }} <span class="small">{{ achievement.comment }}</span>
		</div>
		<div class="achievement__footer">
			{{ achievement.text }}
		</div>
	</div>
</template>
<script>

export default {
	name: 'HomePageAchievement',
	props: {
		achievement: {
			type: Object,
			default: () => {
			},
		},
	},
};
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/font";
@import "assets/styles/mixins/mq";

.achievement {
	&__header {
		display: flex;
		align-items: flex-end;
		margin-bottom: 20px;
		padding-bottom: 10px;
		border-bottom: 1px solid var(--white-color);
		color: #878A97;

		@include font(34, extra-bold, 1.24);

		@include mq(large-mobile) {
			@include font(48, extra-bold, 1.24);
		}

		.small {
			margin-left: 12px;
			margin-bottom: 5px;

			@include font(14);
		}
	}

	&__footer {
		color: var(--white-color);
		text-transform: uppercase;

		@include font(11, bold);

		@include mq(large-mobile) {
			@include font(13);
		}
	}
}
</style>
