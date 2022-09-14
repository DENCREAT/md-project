<template>
	<div
		class="page-starter"
		:style="!isFullScreen && { ...bgStyles }"
		:class="{ 'page-starter--homepage': isFullScreen }">
		<div class="page-starter__container container">
			<slot />

			<client-only>
				<SocialList
					v-if="showSocial"
					:vertical="device.isWide"
					:transparent="true"
					:gap="(device.isLargeTablet || device.isDesktop) ? 'var(--base-indent)' : 'var(--indent-2)'"
					class="page-starter__social" />
			</client-only>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import SocialList from '~/components/SocialList.vue';

export default Vue.extend({
	name: 'PageStarter',
	components: { SocialList },
	props: {
		bgImg: {
			type: String,
			default: '',
		},
		isFullScreen: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			defaultBg: '/images/default-starter-bg.jpg',
		};
	},
	computed: {
		bgStyles() {
			return {
				'background-image': `url(${this.bgImg || this.defaultBg})`,
				'background-size': 'cover',
			};
		},
		showSocial(): boolean {
			return !this.device.isMobile && !this.device.isLargeMobile && !this.device.isTablet;
		},
	},
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/mq';

.page-starter {
	$root: &;
	background-color: var(--primary-color);
	padding-top: 128px;
	padding-bottom: var(--indent-5);

	display: flex;
	flex-direction: column;
	justify-content: center;

	&__container {
		position: relative;
		height: 100%;
		width: 100%;
		margin: 0 auto;

		@include mq(tablet) {
			padding-top: var(--indent-5);
		}

		@include mq(large-tablet) {
			padding-bottom: var(--indent-4);
		}

		@include mq(large-desktop) {
			padding-bottom: var(--indent-10);
		}

		@include mq(wide) {
			padding-bottom: var(--indent-12);
		}
	}

	&__social {
		@include mq(large-tablet) {
			position: absolute;
			bottom: var(--indent-4);
			right: var(--indent-2);
		}

		@include mq(desktop) {

		}

		@include mq(wide) {
			bottom: 0;
			top: 0
		}
	}

	&--homepage {
		min-height: 100vh;
		height: auto;
		background: url(/images/home-page-starter-bg-mobile.jpg);
		background-size: cover;
		background-position-y: 20px;
		justify-content: flex-start;

		@include mq(480px) {
			background-position-y: -20px;
		}

		@include mq(520px) {
			background-position-y: -60px;
		}

		@include mq(600px) {
			background-position-y: -100px;
		}

		@include mq(660px) {
			background-position-y: -160px;
		}

		@include mq(720px) {
			background-position-y: -210px;
		}

		@include mq(tablet) {
			background: url(/images/home-page-starter-bg.jpg);
			background-position-y: 0;
			background-position-x: -720px;
			justify-content: center;
		}

		@include mq(940px) {
			background-position-x: -620px;
		}

		@include mq(large-tablet) {
			background-position-x: -520px;
		}

		@include mq(1300px) {
			background-position-x: -420px;
		}

		@include mq(1366px) {
			background-position-x: -320px;
		}

		@include mq(1510px) {
			background-position-x: -220px;
		}

		@include mq(1660px) {
			background-position-x: -120px;
		}

		@include mq(1800px) {
			background-position-x: 0;
		}

		#{$root}__social {
			top: auto;
			bottom: 0;

			@include mq(1920px) {
				right: calc(var(--indent-10) * -1);
			}
		}
	}
}
</style>
