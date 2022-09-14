<template>
	<a
		:href="`tel:${phone}`"
		:class="{
			'phone-link--big': big,
			'phone-link--inherit': inherit,
		}"
		class="phone-link no-wrap">
		{{ phone }}
	</a>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import Vue from 'vue';

import { useContactsStore } from '~/store/contacts';

export default Vue.extend({
	name: 'PhoneLink',
	props: {
		big: Boolean,
		inherit: Boolean,
	},
	computed: {
		...mapState(useContactsStore, ['phone']),
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

	&--inherit {
		font-size: inherit;
		line-height: inherit;
		color: inherit;
		font-weight: inherit;
	}
}
</style>
