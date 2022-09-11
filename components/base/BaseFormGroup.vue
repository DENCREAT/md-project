<template>
	<div class="base-form-group">
		<slot />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'BaseFormGroup',
});
</script>
