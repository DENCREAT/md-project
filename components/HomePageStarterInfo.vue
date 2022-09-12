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
			<BaseButton class="home-page-starter-info__cta-btn">
				{{ btnText }}
			</BaseButton>

			<div class="home-page-starter-info__add-info">
				{{ addInfo }}
			</div>

			<AchievementList class="home-page-starter-info__achievements" />
		</div>

		<client-only>
			<SocialList
				v-if="!device.isMobile"
				:vertical="device.isDesktop || device.isLargeDesktop || device.isWide"
				class="home-page-starter-info__social" />
		</client-only>
	</div>
</template>

<script lang="ts">
// noinspection NpmUsedModulesInstalled
import Vue from 'vue';

import AchievementList from '~/components/AchievementList.vue';
import BaseButton from '~/components/base/BaseButton.vue';
import SocialList from '~/components/SocialList.vue';

export default Vue.extend({
	name: 'HomePageStarterInfo',
	components: { SocialList, AchievementList, BaseButton },
	data() {
		return {
			/* eslint-disable max-len */
			title: 'Юридические услуги с гарантией результата',
			description: 'Мы успешно оказываем юридическую помощь в области семейного, административного, жилищного, гражданского и уголовного права',
			addInfo: 'Получите детальный анализ вашей ситуаци и план по ее разрешению совершенно бесплатно',
			btnText: 'Записаться на консультацию',
		};
	},
});
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

	@include mq(large-tablet) {
		padding-top: 70px;
	}

	@include mq(desktop) {
		padding-top: 110px;
		padding-bottom: 60px;
	}

	@include mq(large-desktop) {
		padding-top: 110px;
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

	&__cta-btn {
		margin-top: 38px;
	}

	&__achievements {
		margin-top: 65px;
	}

	&__social {
		@include mq(tablet) {
			margin-top: var(--indent-6);
		}

		@include mq(desktop) {
			margin-top: 0;
			position: absolute;
			bottom: 0;
			right: var(--indent-2);
		}

		@include mq(wide) {
			bottom: 60px;
		}
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
