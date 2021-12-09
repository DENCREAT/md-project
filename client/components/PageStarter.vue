<template>
	<div class="wrapper" :style="!bgFromStyles && { ...bgStyles }" :class="[cssClass]">
		<div class="container">
			<slot />
		</div>
	</div>
</template>
<script>

export default {
	name: 'PageStarter',
	props: {
		bgImg: {
			type: String,
			default: ''
		},
		cssClass: {
			type: String,
			default: ''
		},
		bgFromStyles: {
			type: Boolean,
			default: false
		}
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
				'background-size': 'cover'
			};
		}
	}
};
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/mq";

.wrapper {
  background-color: var(--primary-color);
  padding-top: 128px;
  min-height: 100vh;
}

.homepage-starter {
  background: url(/images/home-page-starter-bg-mobile.jpg);
  background-size: cover;
  background-position-y: 20px;

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
}
</style>
