<template>
	<div class="page-starter-info">
		<SectionTitle
			:line-styles="{ backgroundColor: '#888DA0' }"
			:center="true"
			:uppercase="false"
			:self-center="true"
			:theme="SectionTheme.ACCENT"
			tag="h1">
			<slot name="title" />
		</SectionTitle>
		<div
			v-if="hasSlot('subtitle')"
			class="page-starter-info__subtitle">
			<slot name="subtitle" />
		</div>

		<div
			v-if="hasSlot('actions')"
			class="page-starter-info__actions">
			<slot name="actions" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import SectionTitle from '~/components/SectionTitle.vue';
import { SectionTheme } from '~/enums';

export default Vue.extend({
	name: 'PageStarterInfo',
	components: { SectionTitle },
	data() {
		return {
			SectionTheme,
		};
	},
	methods: {
		hasSlot(name: string): boolean {
			return !!this.$slots[name];
		},
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/flex";
@import "assets/styles/mixins/font";

.page-starter-info {
	display: flex;
	flex-direction: column;
	row-gap: var(--indent-4);
	height: 100%;
	color: var(--white-color);

	@include flex-center;

	&__subtitle {
		max-width: 1080px;
		text-align: center;
		@include font(16, regular);
	}
}
</style>
