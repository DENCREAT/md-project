<template>
	<div class="base-textarea">
		<textarea
			v-bind="$attrs"
			class="base-textarea__control base-text-control" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'BaseTextarea',
});
</script>

<style lang="scss" scoped>
.base-textarea {
	display: flex;
	flex-direction: column;

	&__control {
		height: 140px;
	}
}
</style>
