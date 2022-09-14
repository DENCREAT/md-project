<template>
	<div class="dialog-image">
		<img
			:src="url"
			alt=""
			class="dialog-image__image responsive-image">
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'DialogImage',
	props: {
		url: String,
	},
});
</script>

<style lang="scss" scoped>
.dialog-image {
	&__image {
		max-height: 85vh;
	}
}
</style>
