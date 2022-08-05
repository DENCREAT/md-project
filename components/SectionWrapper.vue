<template>
	<section class="section">
		<div class="container">
			<h2 class="section__title">
				{{ title }}
			</h2>

			<div class="section__content">
				<slot />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'SectionLightWrapper',
	props: {
		title: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/font";

.section {
	display: flex;
	flex-direction: column;
	row-gap: var(--indent-3);
	padding: 30px 0;
	background: #ECF0FD;

	@include mq(desktop) {
		padding-top: 80px;
		padding-bottom: 110px;
	}

	&__title {
		max-width: 420px;
		color: #1A2038;
		text-transform: uppercase;

		@include font(24, bold);

		@include mq(large-mobile) {
			@include font(30);
		}

		@include mq(tablet) {
			margin-bottom: 35px;
		}

		@include mq(desktop) {
			margin-bottom: 50px;

			@include font(32);
		}

		@include mq(large-desktop) {
			margin-bottom: 70px;
		}

		&:after {
			content: '';
			margin-top: 20px;
			display: block;
			height: 4px;
			width: 100%;
			background-color: var(--secondary-color);
			border-radius: 4px;
		}
	}
}
</style>
