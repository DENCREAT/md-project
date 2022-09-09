<template>
	<div class="category">
		<div class="category__header">
			<i
				class="category__icon"
				:class="data.iconClass" />

			<SectionTitle
				:tag="TitleTag.H3"
				:theme="SectionTheme.ACCENT"
				:title="data.title" />
		</div>

		<div class="category__content">
			<ul class="category__list">
				<li
					v-for="item in data.items"
					:key="item"
					class="category__list-item">
					{{ item }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import SectionTitle from '~/components/SectionTitle.vue';
import { SectionTheme, TitleTag } from '~/enums';

export default Vue.extend({
	name: 'CategoryBlock',
	components: { SectionTitle },
	props: {
		data: {
			type: Object,
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

	&__list {
		list-style: none;
	}

	&__list-item {
		display: flex;
		align-items: center;

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
