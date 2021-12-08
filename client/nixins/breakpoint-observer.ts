import debounce from 'lodash/debounce';
import mixins from 'vue-typed-mixins';

import { Breakpoints } from '@/enums/Breakpoints';
import { BREAKPOINTS_CONFIG } from '@/enums/BreakpointsConfig';

export const breakpointObserver = mixins().extend({
	data() {
		return {
			observerDebounceFunction: (e: Event) => {},
			observerDebounceTime: 300 as number,
			currentWindowWidth: window.innerWidth
		};
	},
	computed: {
		device(): {[key: string]: boolean} {
			return {
				isMobile: (this as any).currentBreakpoint === Breakpoints.XS,
				isTablet: (this as any).currentBreakpoint === Breakpoints.SM,
				isDesktop: (this as any).currentBreakpoint === Breakpoints.MD,
				isLargeDesktop: (this as any).currentBreakpoint === Breakpoints.LG,
				isXLDesktop: (this as any).currentBreakpoint === Breakpoints.XL,
			};
		},
		currentBreakpoint(): Breakpoints {
			const width = this.currentWindowWidth;

			if (width < BREAKPOINTS_CONFIG.sm) return Breakpoints.XS;
			if (width >= BREAKPOINTS_CONFIG.sm && width < BREAKPOINTS_CONFIG.md) return Breakpoints.SM;
			if (width >= BREAKPOINTS_CONFIG.md && width < BREAKPOINTS_CONFIG.lg) return Breakpoints.MD;
			if (width >= BREAKPOINTS_CONFIG.lg && width < BREAKPOINTS_CONFIG.xl) return Breakpoints.LG;

			return Breakpoints.XL;
		}
	},
	mounted() {
		this.observerDebounceFunction = debounce(this.onWindowResize, this.observerDebounceTime);
		window.addEventListener('resize', this.observerDebounceFunction, false);
	},
	methods: {
		onWindowResize(e: Event): void {
			this.currentWindowWidth = (e.target as Window).innerWidth;
		}
	},
	destroyed() {
		window.removeEventListener('resize', this.observerDebounceFunction, false);
	}
});
