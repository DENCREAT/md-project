<template>
	<div class="header">
		<div class="container">
			<div class="header__inner">
				<Logo :variant="logoTypes.GRAY" class="header__logo" />
				<HeaderNav v-if="showDesktopMenu" />
				<HeaderPhone class="header__phone" />
			</div>
		</div>
	</div>
</template>
<script lang="ts">

import Vue, { VueConstructor } from 'vue';

import HeaderNav from '~/components/HeaderNav.vue';
import HeaderPhone from '~/components/HeaderPhone.vue';
import Logo from '~/components/Logo.vue';
import { LogoTypes } from '~/enums';
import { breakpointObserver } from '~/nixins/breakpoint-observer';

export default (Vue as VueConstructor<Vue & InstanceType<typeof breakpointObserver>>).extend({
	name: 'Header',
	mixins: [breakpointObserver],
	data() {
		return {
			logoTypes: LogoTypes
		};
	},
	computed: {
		showDesktopMenu(): boolean {
			return !this.device.isMobile && !this.device.isTablet && !this.device.isBigTablet;
		}
	},
	components: { HeaderPhone, Logo, HeaderNav }
});
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";

.header {
  &__inner {
    @extend %flex-v-center;
    padding: 50px 0;
    justify-content: space-between;
  }

  &__logo {
    margin-right: 30px;
  }

  &__phone {
    margin-left: 30px;
  }
}
</style>
