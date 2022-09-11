<template>
	<div
		v-if="items.length"
		class="submenu">
		<div
			v-for="item in items"
			:key="item.title"
			class="submenu__item">
			<NuxtLink
				:to="item.url"
				class="submenu__item-link">
				{{ item.title }}
			</NuxtLink>

			<i class="submenu__item-arrow icon-arrow-right" />

			<ul
				v-if="item.children"
				class="submenu__inner">
				<li
					v-for="child in item.children"
					class="submenu__inner-item">
					<NuxtLink
						:to="child.url"
						class="submenu__inner-item-link">
						{{ child.title }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { NavigationItem } from '~/interfaces';

export default Vue.extend({
	name: 'SubMenu',
	props: {
		items: {
			type: Array as PropType<NavigationItem[]>,
			default: () => [],
		},
	},
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/font';
@import 'assets/styles/mixins/size';
@import 'assets/styles/mixins/flex';

.submenu {
	$arrow-icon-size: 26px;
	$item-height: 40px;
	position: absolute;
	padding: 20px 20px 40px 20px;
	width: max-content;
	z-index: get-layer(initial);
	background: rgba(var(--primary-light-color-rgb), .88);
	border: 1px solid var(--white-color);
	border-radius: 3px;

	&::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		height: 16px;
		top: 0;
		transform: translateY(-100%);
	}

	&__item {
		position: relative;
		//padding: 10px 50px 10px 0;
		color: var(--menu-item-color);
		//border-bottom: 1px solid #8890AB;
		margin-right: calc(20px + #{$arrow-icon-size});

		@include font(12, bold);
	}

	&__item-link {
		display: block;
		color: inherit;
		padding: 10px 50px 10px 0;
		border-bottom: 1px solid #8890AB;
		transition: color .13s ease-in-out;

		&:hover {
			color: var(--white-color);
		}
	}

	&__item-arrow {
		position: absolute;
		left: calc(100% + 20px);
		top: calc((#{$item-height} - #{$arrow-icon-size}) / 2);
		background-color: #646D8D;
		border-radius: 50%;
		color: var(--white-color);
		font-size: 10px;
		cursor: pointer;
		transition: background-color .26s ease-in-out;

		@include size($arrow-icon-size);
		@include flex-center;

		&:hover {
			background-color: var(--secondary-color);
		}
	}

	&__inner {
		list-style: none;
		padding: var(--indent-2) 0;
		border-bottom: 1px solid #8890AB;
	}

	&__inner-item-link {
		padding: 4px 0;
		width: max-content;

		@include flex-v-center;

		&::before {
			content: '';
			border: 1px solid;
			border-radius: 50%;
			margin-right: var(--base-indent);

			@include size(0);
		}
	}
}
</style>
