<template>
	<div class="category">
		<div class="category__header">
			<i
				class="category__icon"
				:class="data.iconClass" />

			<SectionTitle
				:tag="TitleTag.H3"
				:theme="SectionTheme.ACCENT"
				:uppercase="false"
				:title="data.name" />
		</div>

		<div class="category__content">
			<div class="category__list">
				<NuxtLink
					v-for="(item, index ) in data.children"
					:key="item.ID + index"
					:to="item.url"
					class="category__list-item">
					{{ item.post_title }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import SectionTitle from '~/components/SectionTitle.vue';
import { SectionTheme, TitleTag } from '~/enums';
import { NavigationItem } from '~/interfaces';

export default Vue.extend({
	name: 'CategoryBlock',
	components: { SectionTitle },
	props: {
		data: {
			type: Object as PropType<NavigationItem>,
			required: true,
		},
	},
	data() {
		return {
			TitleTag,
			SectionTheme,
		};
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/font";
@import "assets/styles/mixins/size";
@import "assets/styles/mixins/flex";

.category {
	display: flex;
	flex-direction: column;
	row-gap: var(--indent-4);
	color: var(--white-color);

	&__header {
		display: flex;
		flex-direction: column;
		row-gap: var(--indent-3);
	}

	&__icon {
		font-size: 45px;
	}

	&__title {
		@include font(22, bold);
	}

	&__list-item {
		@include flex-v-center;
		@include font(14, medium, 2);

		&::before {
			content: '';
			border: 2px solid;
			border-radius: 50%;
			margin-right: var(--base-indent);

			@include size(0);
		}
	}
}
</style>
