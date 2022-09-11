<template>
	<div class="achievements">
		<HomePageAchievement
			v-for="item in items"
			:key="item.id"
			:achievement="item" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import HomePageAchievement from '~/components/HomePageAchievement.vue';
import { Achievement } from '~/interfaces';
import { addId, WithId } from '~/utils/addId';

export default Vue.extend({
	name: 'AchievementList',
	components: { HomePageAchievement },
	data() {
		return {
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
			] as Achievement[],
		};
	},
	computed: {
		items(): WithId<Achievement>[] {
			return this.achievements.map((a: Achievement) => addId<Achievement>(a));
		},
	},
});
</script>

<style lang="scss">
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/font";

.achievements {
	display: flex;
	max-width: 460px;
	column-gap: 5%;

	@include mq(large-mobile) {
		@include font(30);
	}

	@include mq(tablet) {
		column-gap: 60px;
	}
}
</style>
