<template>
	<SectionWrapper
		:title="title">
		<div class="affairs">
			<div class="affairs__list">
				<AffairItem
					v-for="item in affairs"
					:key="item.url"
					:data="item"
					class="affairs__item" />
			</div>

			<ShowAll
				url="/"
				title="Смотреть все дела" />
		</div>
	</SectionWrapper>
</template>

<script>
import AffairItem from '~/components/AffairItem';
import SectionWrapper from '~/components/SectionWrapper';
import ShowAll from '~/components/ShowAll';

export default {
	name: 'Affairs',
	components: { ShowAll, AffairItem, SectionWrapper },
	data() {
		return {
			title: 'Мои успешные дела',
			affairs: [
				{
					title: 'Доверитель защищён от чёрных риелторов по договору займа с одновременным залогом имущества',
					url: '/',
					imgUrl: '/images/affair.png',
				},
				{
					title: 'В пользу моего доверителя завершён судебный спор против автосалона',
					url: '/',
					imgUrl: '/images/affair.png',
				},
				{
					title: 'Пожар, потоп: как не стать жертвой управляющей компании',
					url: '/',
					imgUrl: '/images/affair.png',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/mq";

.affairs {
	display: flex;
	flex-direction: column;
	row-gap: var(--indent-6);

	@include mq(desktop) {
		row-gap: var(--indent-10);
	}

	&__list {
		display: flex;
		flex-direction: column;
		row-gap: var(--indent-5);

		@include mq(860px) {
			flex-direction: row;
			flex-wrap: wrap;
			column-gap: var(--indent-5);
		}
	}

	&__item {
		margin: 0 auto;

		@include mq(860px) {
			width: calc(100% / 2 - 40px / 2);
		}

		@include mq(large-desktop) {
			width: calc(100% / 3 - 40px / 3 * 2);
		}
	}
}
</style>
