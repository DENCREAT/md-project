<template>
	<div class="header">
		<div class="container">
			<div class="header__inner">
				<Logo :variant="logoTypes.GRAY" class="header__logo" />
				<HeaderNav class="header__desktop-nav" />
				<div class="header__wrapper-right">
					<HeaderPhone class="header__phone" />
					<MobileMenuBtn class="header__burger" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">

import Vue from 'vue';

import HeaderNav from '~/components/HeaderNav.vue';
import HeaderPhone from '~/components/HeaderPhone.vue';
import Logo from '~/components/Logo.vue';
import MobileMenuBtn from '~/components/MobileMenuBtn.vue';
import { LogoTypes } from '~/enums';

export default Vue.extend({
	name: 'Header',
	data() {
		return {
			logoTypes: LogoTypes
		};
	},
	components: { MobileMenuBtn, HeaderPhone, Logo, HeaderNav }
});
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";

.header {
  position: absolute;
  width: 100%;

  &__inner {
    @extend %flex-v-center;
    position: relative;
    padding: 20px 0 15px 0;
    justify-content: space-between;

    &:after {
      content: '';
      position: absolute;
      height: 3px;
      left: 0;
      right: 0;
      top: 100%;
      background-color: #696E83;
      border-radius: 3px;

      @include mq(desktop) {
        content: none;
      }
    }

    @include mq(desktop) {
      padding: 50px 0;
    }
  }

  &__logo {
    margin-right: 30px;
  }

  &__phone {
    margin-left: 30px;
    display: none;

    @include mq(700px) {
      display: flex;
    }
  }

  &__desktop-nav {
    display: none;

    @include mq(desktop) {
      display: block;
    }
  }

  &__burger {
    @extend %flex-center;
    @include size(33px, 20px);
    cursor: pointer;

    @include mq(desktop) {
      display: none;
    }
  }

  &__wrapper-right {
    @extend %flex-v-center;
    column-gap: 30px;

    @include mq(tablet) {
      column-gap: 40px;
    }
  }
}
</style>
