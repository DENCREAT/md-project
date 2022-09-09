<template>
	<SectionWrapper
		v-if="hasCategories"
		:title="title"
		:title-fluid="true"
		:title-center="!device.isMobile"
		:theme="SectionTheme.ACCENT"
		class="categories">
		<div class="categories__list">
			<CategoriesSectionBg class="categories__list-bg" />

			<CategoryBlock
				v-for="category in categories"
				:key="category.title"
				:data="category"
				class="categories__item" />
		</div>
	</SectionWrapper>
</template>

<script lang="ts">
import Vue from 'vue';

import CategoriesSectionBg from '~/components/CategoriesSectionBg.vue';
import CategoryBlock from '~/components/CategoryBlock.vue';
import SectionWrapper from '~/components/SectionWrapper.vue';
import { SectionTheme } from '~/enums';

export default Vue.extend({
	name: 'CategoriesSection',
	components: { CategoriesSectionBg, CategoryBlock, SectionWrapper },
	data() {
		return {
			title: 'Виды юридической помощи',
			SectionTheme,
			categories: [
				{
					title: 'Защита прав автовладельцев',
					iconClass: 'icon-auto',
					items: [
						'Юрист по ДТП',
						'Споры со страховой компанией',
						'Оставление места ДТП',
						'Споры с автосалонами',
						'Оспаривание протоколов',
						'Взыскание ущерба',
						'Адвокат по ДТП со смертельным исходом',
					],
				},
				{
					title: 'Сфера недвижимости',
					iconClass: 'icon-building',
					items: [
						'Адвокат по недвижимости',
						'Юрист по аренде жилья',
						'Адвокат по купле-продаже',
						'Оспаривание сделки купли-продажи',
						'Признание права собственности на недвижимость',
						'Споры с застройщиками',
					],
				},
				{
					title: 'Сфера оказания услуг',
					iconClass: 'icon-customers',
					items: [
						'Некачественно оказанные услуги',
						'Взыскание по договору оказания услуг',
						'Юрист по защите прав потребителей',
						'Возврат денежных средств за неоказанные услуги',
						'Отказ от навязанных услуг',
						'Нарушение сроков выполнения работ',
					],
				},
				{
					title: 'Гражданские и иные дела',
					iconClass: 'icon-citizen',
					items: [
						'Адвокат по трудовым спорам',
						'Юрист по наследству',
						'Адвокат по административным делам',
						'Ст. 159. Мошеничество',
						'Защита интересов в арбитражном суде',
						'Признание гражданина недееспособным',
						'Представление интересов в суде',
						'Адвокат по уголовным делам',
						'Компенсация морального вреда',
					],
				},
				{
					title: 'Семейные правоотношения',
					iconClass: 'icon-family',
					items: [
						'Адвокат по разводам',
						'Юрист по разделу имущества супругов',
						'Оспаривание отцовства',
						'Лишение родительских прав',
						'Взыскание алиментов',
						'Установление опеки или попечтительства',
						'Определение порядка общения с ребенком',
						'Оспаривание запрета на выезд',
						'Юрист по семейным спорам',
					],
				},
				{
					title: 'Сфера денежных обязательств',
					iconClass: 'icon-money',
					items: [
						'Адвокат по взысканию долгов',
						'Взыскание долгов с физических лиц',
						'Взыскание долгов с юридических лиц',
						'Юрист по взысканию долгов',
						'Субсидиарная ответственность',
						'Взыскание долга с поручителя',
						'Взыскание по договору займа',
						'Юрист по исполнительному производству',
					],
				},
			],
		};
	},
	computed: {
		hasCategories(): boolean {
			return !!this.categories.length;
		},
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";
@import "assets/styles/mixins/get-layer";
@import "assets/styles/mixins/set-responsive-width";

.categories {
	&__list {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		row-gap: var(--indent-6);

		@include mq(large-desktop) {
			column-gap: var(--indent-12);
		}
	}

	&__list-bg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		@include size(100%);
	}

	&__item {
		position: relative;
		z-index: get-layer(initial);

		@include set-responsive-width(1);

		@include mq(tablet) {
			padding-right: var(--indent-4);
			@include set-responsive-width(2);
		}

		@include mq(large-desktop) {
			padding-right: 0;
			@include set-responsive-width(3, var(--indent-12));
		}
	}
}
</style>
