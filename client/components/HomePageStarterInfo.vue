<template>
	<div class="home-page-starter-info">
		<div class="wrapper-top">
			<h1 class="title">
				{{ title }}
			</h1>
			<div class="description">
				{{ description }}
			</div>
		</div>

		<div class="wrapper-bottom">
			<button class="btn cta-btn">
				{{ btnText }}
			</button>
			<div class="add-info">
				{{ addInfo }}
			</div>
			<div class="achievements">
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
	data() {
		return {
			title: 'Юридические услуги с гарантией результата',
			description: 'Мы успешно оказываем юридическую помощь в области семейного, административного, жилищного, гражданского и уголовного права',
			addInfo: 'Получите детальный анализ вашей ситуаци и план по ее разрешению совершенно бесплатно',
			btnText: 'Записаться на консультацию',
			achievements: [
				{
					count: '15',
					comment: 'лет',
					text: 'успешной работы'
				},
				{
					count: '60+',
					comment: '',
					text: 'консультаций в месяц'
				},
				{
					count: '250',
					comment: 'дел',
					text: 'в пользу наших клиентов'
				}
			]
		};
	},
	components: { HomePageAchievement }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/mq";

.home-page-starter-info {
  @extend %flex;
  z-index: 1;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 53px;

  @include mq(tablet) {
    padding-top: 150px;
    max-width: 590px;
  }
}

.title {
  margin-bottom: 12px;
  font-size: 30px;
  font-weight: var(--fw-bold);
  line-height: 38px;
  color: var(--white-color);

  @include mq(tablet) {
    font-size: 42px;
    line-height: 54px;
    margin-bottom: 30px;
  }
}

.description {
  margin-bottom: 65px;
  font-size: 18px;
  color: var(--white-color);
  font-weight: var(--fw-bold);
  line-height: 23px;

  @include mq(tablet) {
    font-size: 20px;
    line-height: 25px
  }
}

.add-info {
  margin-top: 37px;
  max-width: 390px;
  font-size: 14px;
  line-height: 18px;
  font-weight: var(--fw-bold);
  color: #8891B2;
  display: none;

  @include mq(desktop) {
    display: block;
  }
}

.btn {
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 38px;
}

.achievements {
  @extend %flex;
  max-width: 460px;
  margin-top: 65px;
  column-gap: 37px;

  @include mq(tablet) {
    column-gap: 60px;
  }
}

.wrapper-top {
  flex-grow: 1;
}

.wrapper-bottom {
  @extend %flex;
  flex-direction: column-reverse;
}
</style>
