<template>
	<transition
		v-if="isMobileMenuActive"
		name="slide">
		<nav class="menu-mobile">
			<i
				class="menu-mobile__close-btn icon-close"
				@click="hideMobileMenu()" />

			<MenuItem
				v-for="item in navigationTree"
				:key="item.id"
				:data="item" />
		</nav>
	</transition>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import Vue from 'vue';

import MenuItem from '~/components/MenuItem.vue';
import { useNavigationStore } from '~/store/navigation';
import { useOverlayStore } from '~/store/overlay';

export default Vue.extend({
	name: 'MainMenuMobile',
	components: { MenuItem },
	computed: {
		...mapState(useNavigationStore, ['navigationTree', 'isMobileMenuActive']),
	},
	mounted() {
		useOverlayStore().$onAction(({ name }) => {
			name === 'hideOverlay' && this.hideMobileMenu(true);
		});
	},
	methods: {
		...mapActions(useNavigationStore, ['hideMobileMenu']),
	},
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/font';
@import 'assets/styles/mixins/size';
@import 'assets/styles/mixins/get-layer';

.slide-enter-active,
.slide-leave-active {
	transition: all .4s cubic-bezier(.44,.24,0,.98);
}

.slide-enter,
.slide-leave-to {
	transform: translateX(-100%);
}

.menu-mobile {
	position: fixed;
	top: 0;
	left: 0;
	z-index: get-layer(menu-mobile);
	display: flex;
	flex-direction: column;
	padding: var(--indent-3) 0;
	background-color: var(--primary-light-color);
	overflow: auto;
	max-width: 500px;

	@include size(100%);

	&__close-btn {
		padding: var(--indent-2);
		position: absolute;
		right: 0;
		top: var(--indent-3);
		font-size: 20px;
		color: var(--white-color);
		cursor: pointer;
	}
}
</style>
