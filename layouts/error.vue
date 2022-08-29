<template>
	<div class="container section-404 first-section">
		<h1 class="section-404__title">
			404 Page Not Found
		</h1>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Error',
});
</script>

<style lang="scss" scoped>
.section-404 {
	&__title {
		color: var(--white-color);
	}
}
</style>
