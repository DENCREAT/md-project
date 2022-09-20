<template>
	<div class="section-pagination">
		<i class="section-pagination__arrow section-pagination__arrow--prev icon-arrow-left" />
		<i class="section-pagination__arrow section-pagination__arrow--next icon-arrow-right" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'SectionPagination',
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/size';
@import 'assets/styles/mixins/flex';

.section-pagination {
	justify-content: space-between;
	border-top: 2px solid #737EAC;
	border-bottom: 2px solid #737EAC;
	padding: var(--indent-2) 0;

	@include flex-v-center;

	&__arrow {
		border-radius: 50%;
		font-size: 10px;
		color: var(--white-color);
		background-color: var(--secondary-color);
		cursor: pointer;

		@include size(32px);
		@include flex-center;
	}
}
</style>
