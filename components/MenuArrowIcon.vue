<template>
	<i
		:class="[{ 'menu-arrow--expanded': expanded }, `menu-arrow--${theme}` ]"
		class="menu-arrow icon-arrow-right" />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { MenuArrowIconColor } from '~/enums';

export default Vue.extend({
	name: 'MenuArrowIcon',
	props: {
		expanded: Boolean,
		theme: {
			type: String as PropType<MenuArrowIconColor>,
			default: MenuArrowIconColor.BLUE,
		},
	},
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/size';
@import 'assets/styles/mixins/flex';

.menu-arrow {
	$root: &;

	background-color: #646D8D;
	border-radius: 50%;
	color: var(--white-color);
	font-size: 10px;
	cursor: pointer;
	transition: background-color .26s ease-in-out;

	@include size(26px);
	@include flex-center;

	&--expanded {
		background-color: var(--secondary-color);
		transform: rotate(90deg);
	}

	&--white {
		&#{$root}--expanded {
			color: var(--primary-light-color);
			background-color: var(--white-color);
		}
	}
}
</style>
