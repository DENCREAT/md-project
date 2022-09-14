<template>
	<div class="page-starter-homepage">
		<PageStarterText class="page-starter-homepage__top">
			<template #title>
				{{ title }}
			</template>

			<template #description>
				{{ description }}
			</template>
		</PageStarterText>

		<div class="page-starter-homepage__bottom">
			<BaseButton
				:text="makeRequestBtn"
				class="page-starter-homepage__cta-btn" />

			<div class="page-starter-homepage__add-info">
				{{ addInfo }}
			</div>

			<AchievementList class="page-starter-homepage__achievements" />
		</div>
	</div>
</template>

<script lang="ts">
// noinspection NpmUsedModulesInstalled
import { mapState } from 'pinia';
import Vue from 'vue';

import AchievementList from '~/components/AchievementList.vue';
import BaseButton from '~/components/base/BaseButton.vue';
import PageStarterText from '~/components/PageStarterText.vue';
import { useStaticStore } from '~/store/static';

export default Vue.extend({
	name: 'PageStarterHomepage',
	components: { PageStarterText, AchievementList, BaseButton },
	data() {
		return {
			/* eslint-disable max-len */
			title: 'Юридические услуги с гарантией результата',
			description: 'Мы успешно оказываем юридическую помощь в области семейного, административного, жилищного, гражданского и уголовного права',
			addInfo: 'Получите детальный анализ вашей ситуаци и план по ее разрешению совершенно бесплатно',
			btnText: 'Записаться на консультацию',
		};
	},
	computed: {
		...mapState(useStaticStore, ['makeRequestBtn']),
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/font";

.page-starter-homepage {
	display: flex;
	flex-direction: column;

	@include mq(tablet) {
		max-width: 520px;
	}

	@include mq(wide) {
		max-width: 600px;
	}

	&__top {
		margin-bottom: 200px;

		@include mq(large-mobile) {
			margin-bottom: 250px;
		}

		@include mq(tablet) {
			margin-bottom: 90px;
		}

		@include mq(large-tablet) {
			margin-bottom: 64px;
		}

		@include mq(desktop) {
			margin-top: 70px;
			margin-bottom: 100px;
		}
	}

	&__bottom {
		display: flex;
		flex-direction: column-reverse;
		max-width: 458px;
		row-gap: 35px;

		@include mq(tablet) {
			flex-direction: column;
		}
	}

	&__add-info {
		max-width: 390px;
		color: #8891B2;
		display: none;

		@include font(14, bold);

		@include mq(large-desktop) {
			display: block;
		}
	}
}
</style>
