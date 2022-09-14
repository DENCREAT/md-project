import Vue from 'vue';

import { breakpointObserverMixin } from '~/mixins';

if (!Vue.prototype.__breakpoint_observer__) {
	Vue.prototype.__breakpoint_observer__ = true;
	Vue.mixin(breakpointObserverMixin);
}
