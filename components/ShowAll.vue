<template>
	<div class="show-all">
		<nuxt-link
			:to="url"
			class="show-all__link">
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
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/flex";
@import "assets/styles/mixins/font";

.show-all {
	border-top: 2px solid #737EAC;
	border-bottom: 2px solid #737EAC;

	@include flex-center;

	&__link {
		padding: 26px;
		color: #737EAC;
		text-transform: uppercase;

		@include font(14, bold);
	}
}
</style>
