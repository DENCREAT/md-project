import { defineStore } from 'pinia';

import { WHITELIST_NAVIGATION_KEYS } from '~/constants';
import { NavigationItem } from '~/interfaces';
import { useOverlayStore } from '~/store/overlay';
import { forbidScroll, pickKeysFromObjectArray } from '~/utils';

interface NavigationState {
	isMobileMenuActive: boolean;
	navigation: NavigationItem[];
	navigationTree: NavigationItem[];
	socialList: NavigationItem[];
}

export const useNavigationStore = defineStore('navigation', {
	state: (): NavigationState => ({
		isMobileMenuActive: false,
		navigation: [],
		navigationTree: [],
		socialList: [],
	}),
	actions: {
		async nuxtServerInit() {
			await this.loadNavigation();
		},
		showMobileMenu(preventCircular = false): void {
			this.isMobileMenuActive = true;
			forbidScroll(true);
			!preventCircular && useOverlayStore().showOverlay();
		},
		hideMobileMenu(preventCircular = false): void {
			this.isMobileMenuActive = false;
			forbidScroll(false);
			!preventCircular && useOverlayStore().hideOverlay();
		},
		async loadNavigation() {
			const { data } = await this.$axios.get('navigation');
			const { navigation, navigationTree, social } = data;

			this.navigation = pickKeysFromObjectArray(navigation, WHITELIST_NAVIGATION_KEYS);
			this.navigationTree = navigationTree;
			this.socialList = pickKeysFromObjectArray(social, WHITELIST_NAVIGATION_KEYS);
		},
	},
});
