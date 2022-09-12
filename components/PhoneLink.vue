<template>
	<a
		href="tel:89990204000"
		:class="{ 'phone-link--big': big }"
		class="phone-link no-wrap">8 (999) 02-04-000</a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'PhoneLink',
	props: {
		big: Boolean,
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/font";

.phone-link {
	@include font(15, bold);

	&--big {
		@include font(18);
	}
}
</style>
