<template>
	<SectionLightWrapper
		class="areas"
		:title="title">
		<div class="areas__list">
			<AreaItem
				v-for="item in areas"
				:key="item.url"
				:data="item"
				class="areas__item" />
		</div>
	</SectionLightWrapper>
</template>

<script>
import AreaItem from '~/components/AreaItem';
import SectionLightWrapper from '~/components/SectionLightWrapper';

export default {
	name: 'Areas',
	components: { SectionLightWrapper, AreaItem },
	data() {
		return {
			title: 'Сферы практики',
			areas: [
				{
					title: 'Сфера дененежных обязательствв',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg',
				},
				{
					title: 'Сфера недвижимости',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg',
				},
				{
					title: 'Сфера оказания услуг',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg',
				},
				{
					title: 'Сфера семейных правоотношений',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg',
				},
				{
					title: 'Сфера защиты прав автовладельцев',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg',
				},
				{
					title: 'Сфера уголовных и иных дел',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/mq";

.areas {
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    @include mq(860px) {
      flex-direction: row;
      column-gap: 24px;
      flex-wrap: wrap;
    }
  }

  &__item {
    @include mq(860px) {
      width: calc(100% / 2 - 24px / 2);
    }

    @include mq(wide) {
      width: calc(100% / 3 - 24px / 3 * 2);
    }
  }
}
</style>
