<template>
	<div class="home-page-starter-info">
		<div class="wrapper-top">
			<h1 class="home-page-starter-info__title">
				{{ title }}
			</h1>

			<div class="home-page-starter-info__description">
				{{ description }}
			</div>
		</div>

		<div class="wrapper-bottom">
			<MDBtn class="home-page-starter-info__cta-btn">
				{{ btnText }}
			</MDBtn>

			<div class="home-page-starter-info__add-info">
				{{ addInfo }}
			</div>

			<div class="home-page-starter-info__achievements">
				<HomePageAchievement
					v-for="achievement in achievements"
					:key="achievement.id"
					:achievement="achievement" />
			</div>
		</div>
	</div>
</template>
<script>

import HomePageAchievement from '~/components/HomePageAchievement';

export default {
	name: 'HomePageStarterInfo',
	components: { HomePageAchievement },
	data() {
		return {
			/* eslint-disable max-len */
			title: 'Юридические услуги с гарантией результата',
			description: 'Мы успешно оказываем юридическую помощь в области семейного, административного, жилищного, гражданского и уголовного права',
			addInfo: 'Получите детальный анализ вашей ситуаци и план по ее разрешению совершенно бесплатно',
			btnText: 'Записаться на консультацию',
			achievements: [
				{
					count: '15',
					comment: 'лет',
					text: 'успешной работы',
				},
				{
					count: '60+',
					comment: '',
					text: 'консультаций в месяц',
				},
				{
					count: '250',
					comment: 'дел',
					text: 'в пользу наших клиентов',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/font";

.home-page-starter-info {
	display: flex;
	z-index: 1;
	flex-direction: column;
	padding-bottom: 20px;
	min-height: 750px;

	@include mq(600px) {
		min-height: 850px;
	}

	@include mq(tablet) {
		min-height: 750px;
		max-width: 590px;
		padding-bottom: 130px;
	}

	@include mq(desktop) {
		padding-top: 150px;
		padding-bottom: 60px;
	}

	&__title {
		margin-bottom: 12px;
		color: var(--white-color);

		@include font(26, bold);

		@include mq(large-mobile) {
			@include font(30);
		}

		@include mq(tablet) {
			margin-bottom: 30px;

			@include font(42);
		}
	}

	&__description {
		margin-bottom: 65px;
		color: var(--white-color);

		@include font(15, bold);

		@include mq(large-mobile) {
			@include font(18);
		}

		@include mq(tablet) {
			@include font(20);
		}
	}

	&__add-info {
		margin-top: 37px;
		max-width: 390px;
		color: #8891B2;
		display: none;

		@include font(14, bold);

		@include mq(desktop) {
			display: block;
		}
	}

	&__achievements {
		display: flex;
		max-width: 460px;
		margin-top: 65px;
		column-gap: 5%;

		@include mq(large-mobile) {
			@include font(30);
		}

		@include mq(tablet) {
			column-gap: 60px;
		}
	}

	&__cta-btn {
		margin-top: 38px;
	}
}


.wrapper-top {
	flex-grow: 1;
}

.wrapper-bottom {
	display: flex;
	flex-direction: column-reverse;
	max-width: 458px;

	@include mq(tablet) {
		flex-direction: column;
	}
}
</style>
