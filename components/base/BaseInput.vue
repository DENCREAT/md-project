<template>
	<div class="base-input">
		<input
			v-bind="$attrs"
			type="text"
			class="base-input__control base-text-control">
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'BaseInput',
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/placeholder";

.base-input {
	display: flex;
	flex-direction: column;

	&__control {
		height: var(--control-height);
	}
}
</style>
