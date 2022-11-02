<template>
	<div>
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
					:key="category.name"
					:data="category"
					class="categories__item" />
			</div>
		</SectionWrapper>
	</div>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import Vue from 'vue';

import CategoriesSectionBg from '~/components/CategoriesSectionBg.vue';
import CategoryBlock from '~/components/CategoryBlock.vue';
import SectionWrapper from '~/components/SectionWrapper.vue';
import { SectionTheme } from '~/enums';
import { usePageStore } from '~/store/page';

export default Vue.extend({
	name: 'CategoriesSection',
	components: { CategoriesSectionBg, CategoryBlock, SectionWrapper },
	data() {
		return {
			title: 'Виды юридической помощи',
			SectionTheme,
		};
	},
	computed: {
		...mapState(usePageStore, ['categories']),
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
