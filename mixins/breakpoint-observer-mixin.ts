import debounce from 'lodash/debounce';
import mixins from 'vue-typed-mixins';

import { Breakpoints } from '~/enums/Breakpoints';
import { BREAKPOINTS_CONFIG } from '~/enums/BreakpointsConfig';
import { BreakpointObserverDevice } from '~/types';

export const breakpointObserverMixin = mixins().extend({
	data() {
		return {
			observerDebounceFunction: (e: Event) => {},
			observerDebounceTime: 300 as number,
			currentWindowWidth: process.client && window.innerWidth  as number,
		};
	},
	computed: {
		device(): BreakpointObserverDevice {
			return {
				isMobile: this.currentBreakpoint === Breakpoints.XXS,
				isLargeMobile: this.currentBreakpoint === Breakpoints.XS,
				isTablet: this.currentBreakpoint === Breakpoints.SM,
				isLargeTablet: this.currentBreakpoint === Breakpoints.MD,
				isDesktop: this.currentBreakpoint === Breakpoints.LG,
				isLargeDesktop: this.currentBreakpoint === Breakpoints.XL,
				isWide: this.currentBreakpoint === Breakpoints.XXL,
			};
		},
		currentBreakpoint(): Breakpoints {
			const width = this.currentWindowWidth;

			if (width < BREAKPOINTS_CONFIG.xs) return Breakpoints.XXS;

			if (width >= BREAKPOINTS_CONFIG.xs && width < BREAKPOINTS_CONFIG.sm) return Breakpoints.XS;

			if (width >= BREAKPOINTS_CONFIG.sm && width < BREAKPOINTS_CONFIG.md) return Breakpoints.SM;

			if (width >= BREAKPOINTS_CONFIG.md && width < BREAKPOINTS_CONFIG.lg) return Breakpoints.MD;

			if (width >= BREAKPOINTS_CONFIG.lg && width < BREAKPOINTS_CONFIG.xl) return Breakpoints.LG;

			if (width >= BREAKPOINTS_CONFIG.xl && width < BREAKPOINTS_CONFIG.xxl) return Breakpoints.XL;

			return Breakpoints.XXL;
		},
	},
	mounted() {
		this.observerDebounceFunction = debounce(this.onWindowResize, this.observerDebounceTime);
		window.addEventListener('resize', this.observerDebounceFunction, false);
	},
	methods: {
		onWindowResize(e: Event): void {
			this.currentWindowWidth = (e.target as Window).innerWidth;
		},
	},
	destroyed() {
		window.removeEventListener('resize', this.observerDebounceFunction, false);
	},
});
