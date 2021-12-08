<template>
	<div class="wrapper" :style="{ ...bgStyles }">
		<div class="container">
			<slot />
		</div>
	</div>
</template>
<script>

export default {
	name: 'PageStarter',
	data() {
		return {
			bgStyles: {
				'background-image': `url(${this.getBgUrl()})`,
				'background-size': 'cover'
			}
		};
	},
	methods: {
		getBgUrl(){
			return require('~/assets/img/bg-starter-home-page.jpg');
		}
	}
};
</script>

<style lang="scss" scoped>
  .wrapper {
    background-color: var(--primary-color);
    padding-top: 128px;
    min-height: 100vh;
    max-height: 990px;
  }
</style>
