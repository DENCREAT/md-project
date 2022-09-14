<template>
	<nav>
		<ul class="menu-mobile">
			<li
				v-for="item in items"
				:key="item.id"
				class="menu-mobile__item"
				:class="{ 'hidden': item.forHidden }">
				<NuxtLink
					:to="item.url"
					class="menu-mobile__item-link">
					{{ item.title }}
				</NuxtLink>

				<!--				<transition>-->
				<!--					<SubMenu-->
				<!--						:items="item.children"-->
				<!--						class="menu-mobile__submenu" />-->
				<!--				</transition>-->
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import Vue from 'vue';

import { useNavigationStore } from '~/store/navigation';

export default Vue.extend({
	name: 'MainMenuMobile',
	computed: {
		...mapState(useNavigationStore, ['items']),
	},
});
</script>

<style lang="scss" scoped>
nav {
	background-color: var(--primary-light-color);
}

.menu-mobile {
	display: flex;
	flex-direction: column;
}
</style>
