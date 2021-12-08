<template>
	<div class="sa-wrapper">
		<nuxt-link :to="url" class="show-all">
			{{ title }}
		</nuxt-link>
	</div>
</template>


<script>
export default {
	name: 'ShowAll',
	props: {
		url: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		}
	}
};
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/mq";

.sa-wrapper {
  @extend %flex-center;
  border-top: 2px solid #737EAC;
  border-bottom: 2px solid #737EAC;
}

.show-all {
  padding: 26px;
  font-size: 14px;
  color: #737EAC;
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  line-height: 18px;
}
</style>
