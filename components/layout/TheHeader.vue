<template>
	<header class="header">
		<div class="container">
			<div class="header__inner">
				<Logo
					:variant="LogoTypes.GRAY"
					class="header__logo" />

				<MainMenu class="header__menu" />

				<div class="header__wrapper-right">
					<HeaderPhone class="header__phone" />

					<MobileMenuBtn
						v-if="isVisibleMobileMenu"
						class="header__burger"
						@click.native="showMobileMenu()" />
				</div>
			</div>
		</div>

		<MainMenuMobile v-if="isVisibleMobileMenu" />
	</header>
</template>

<script lang="ts">
import { mapActions } from 'pinia';
import Vue from 'vue';

import HeaderPhone from '~/components/HeaderPhone.vue';
import Logo from '~/components/Logo.vue';
import MainMenu from '~/components/MainMenu.vue';
import MainMenuMobile from '~/components/MainMenuMobile.vue';
import MobileMenuBtn from '~/components/MobileMenuBtn.vue';
import { LogoTypes } from '~/enums';
import { useNavigationStore } from '~/store/navigation';

export default Vue.extend({
	name: 'TheHeader',
	components: { MobileMenuBtn, HeaderPhone, Logo, MainMenu, MainMenuMobile },
	data() {
		return {
			LogoTypes,
		};
	},
	computed: {
		isVisibleMobileMenu(): boolean {
			return !(this.device.isDesktop || this.device.isLargeDesktop || this.device.isWide);
		},
	},
	methods: {
		...mapActions(useNavigationStore, ['showMobileMenu']),
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/flex";
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";
@import "assets/styles/mixins/get-layer";

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

	&__menu {
		display: none;

		@include mq(desktop) {
			display: block;
		}
	}

	&__phone {
		margin-left: 30px;
		display: none;

		@include mq(700px) {
			display: flex;
		}
	}

	&__burger {
		cursor: pointer;

		@include flex-center;
		@include size(33px, 20px);

		@include mq(large-desktop) {
			display: none;
		}
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
