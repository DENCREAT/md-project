<template>
	<section class="container section-404">
		<h1 class="section-404__title">
			404 Страница не найдена или находится в разработке
		</h1>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Error',
});
</script>

<style lang="scss" scoped>
.section-404 {
	padding: var(--indent-5);

	&__title {
		color: var(--primary-text-color);
	}
}
</style>
