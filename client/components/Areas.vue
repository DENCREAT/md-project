<template>
	<SectionLightWrapper class="areas" :title="title">
		<div class="areas__list">
			<Area
				v-for="item in areas"
				:key="item.id"
				:data="item"
				class="areas__item" />
		</div>
	</SectionLightWrapper>
</template>

<script>
import SectionLightWrapper from '~/components/SectionLightWrapper';

import Area from './Area';
export default {
	name: 'Areas',
	data() {
		return {
			title: 'Сферы практики',
			areas: [
				{
					title: 'Сфера дененежных обязательствв',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg'
				},
				{
					title: 'Сфера недвижимости',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg'
				},
				{
					title: 'Сфера оказания услуг',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg'
				},
				{
					title: 'Сфера семейных правоотношений',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg'
				},
				{
					title: 'Сфера защиты прав автовладельцев',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg'
				},
				{
					title: 'Сфера уголовных и иных дел',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg'
				},
			]
		};
	},
	components: { SectionLightWrapper, Area }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/mq";

.areas {

  &__list {
    @extend %flex;
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
