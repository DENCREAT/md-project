<template>
	<div class="header">
		<div class="container">
			<div class="header__inner">
				<Logo
					:variant="logoTypes.GRAY"
					class="header__logo" />

				<MainMenu
					v-if="!showMobileMenu"
					class="header__menu" />

				<div class="header__wrapper-right">
					<HeaderPhone class="header__phone" />
					<MobileMenuBtn
						v-if="showMobileMenu"
						class="header__burger"
						@click.native="openMenuMobile" />
				</div>
			</div>
		</div>

		<transition name="slide">
			<MainMenuMobile
				v-if="showMobileMenu && isMenuMobileOpen"
				class="header__menu-mobile" />
		</transition>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import HeaderPhone from '~/components/HeaderPhone.vue';
import Logo from '~/components/Logo.vue';
import MainMenu from '~/components/MainMenu.vue';
import MainMenuMobile from '~/components/MainMenuMobile.vue';
import MobileMenuBtn from '~/components/MobileMenuBtn.vue';
import { LogoTypes } from '~/enums';

export default Vue.extend({
	name: 'TheHeader',
	components: { MainMenuMobile, MobileMenuBtn, HeaderPhone, Logo, MainMenu },
	data() {
		return {
			logoTypes: LogoTypes,
			isMenuMobileOpen: false,
		};
	},
	computed: {
		showMobileMenu(): boolean {
			return !(this.device.isDesktop || this.device.isLargeDesktop || this.device.isWide);
		},
	},
	methods: {
		openMenuMobile(): void {
			this.isMenuMobileOpen = !this.isMenuMobileOpen;
		},
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/flex";
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";
@import "assets/styles/mixins/get-layer";

.slide-enter-active,
.slide-leave-active {
	transition: all .4s cubic-bezier(.44,.24,0,.98);
}

.slide-enter,
.slide-leave-to {
	transform: translateX(-100%);
}

.header {
	position: absolute;
	width: 100%;

	&__inner {
		position: relative;
		padding: 20px 0 15px 0;
		justify-content: space-between;

		@include flex-v-center;

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

	&__menu {
		display: none;

		@include mq(desktop) {
			display: block;
		}
	}

	&__menu-mobile {
		position: fixed;
		top: 0;
		left: 0;
		z-index: get-layer(menu-mobile);

		@include size(100%);
	}

	&__burger {
		cursor: pointer;

		@include flex-center;
		@include size(33px, 20px);
	}

	&__wrapper-right {
		column-gap: 30px;

		@include flex-v-center;

		@include mq(tablet) {
			column-gap: 40px;
		}
	}
}
</style>
