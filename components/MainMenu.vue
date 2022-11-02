<template>
	<nav>
		<div class="menu">
			<div
				v-for="item in navigationTree"
				:key="item.id"
				class="menu__item"
				:class="{ 'hidden': item.forHidden }">
				<NuxtLink
					:to="{ path: item.url }"
					class="menu__item-link">
					{{ item.title }}
				</NuxtLink>

				<SubMenu
					v-if="item.children"
					:items="item.children"
					class="menu__submenu" />
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import Vue from 'vue';

import SubMenu from '~/components/SubMenu.vue';
import { useNavigationStore } from '~/store/navigation';

export default Vue.extend({
	name: 'MainMenu',
	components: { SubMenu },
	computed: {
		...mapState(useNavigationStore, ['navigationTree']),
	},
});
</script>
<style lang="scss" scoped>
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/get-layer";
@import "assets/styles/mixins/size";

$menu-indent: 12px;

nav {
	position: relative;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 3px;
		border-radius: 1.5px;
		background-color: var(--secondary-color);
	}
}

.menu {
	$root: &;
	display: flex;
	list-style: none;
	color: var(--white-color);

	&__submenu {
		opacity: 0;
		pointer-events: none;
		visibility: hidden;
		top: calc(100% + var(--base-indent));
		left: calc(var(--indent-2) * -1);
		transform: translateY(-16px);
		transition: all .26s ease-in-out;
		z-index: get-layer(menu);
	}

	&__item {
		position: relative;

		& + & {
			margin-left: 15px;
		}

		&.hidden {
			@include mq(desktop) {
				display: none;
			}
			@include mq(large-desktop) {
				display: inline-block;
			}
		}

		&:hover {
			#{$root}__submenu {
				pointer-events: all;
				visibility: visible;
				opacity: 1;
				transform: translateY(0);
			}
		}

		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 3px;
			background-color: transparent;
			z-index: get-layer(initial);
			transition: all .26s;
			transition-timing-function: cubic-bezier(.82,.08,.63,1.05);

			@include size(100%, 0);
		}

		&:hover {
			&::after {
				bottom: 0;
				height: 3px;
				background-color: var(--white-color);
			}
		}
	}

	&__item-link {
		display: block;
		padding-bottom: $menu-indent;
		text-transform: uppercase;
		white-space: nowrap;
		cursor: pointer;
	}
}
</style>
