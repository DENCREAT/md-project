<template>
	<SectionWrapper :title="title">
		<div class="areas">
			<div class="areas__list">
				<AreaItem
					v-for="item in areas"
					:key="item.title"
					:data="item"
					class="areas__item" />
			</div>
		</div>
	</SectionWrapper>
</template>

<script>
import AreaItem from '~/components/AreaItem';
import SectionWrapper from '~/components/SectionWrapper';

export default {
	name: 'AreasSection',
	components: { SectionWrapper, AreaItem },
	data() {
		return {
			title: 'Сферы практики',
			areas: [
				{
					title: 'Защита прав автовладельцев\n',
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
					title: 'Гражданские и иные дела',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg',
				},
				{
					title: 'Семейные правоотношения\n',
					url: '/',
					bgUrl: '/images/area.jpg',
					iconUrl: '/images/area-icon.svg',
				},
				{
					title: 'Сфера денежных обязательств\n',
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
@import "assets/styles/mixins/set-responsive-width";

.areas {
	&__list {
		display: flex;
		flex-direction: column;
		gap: var(--indent-3);

		@include mq(860px) {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	&__item {
		@include mq(860px) {
			@include set-responsive-width(2, var(--indent-3));
		}

		@include mq(wide) {
			@include set-responsive-width(3, var(--indent-3));
		}
	}
}
</style>
