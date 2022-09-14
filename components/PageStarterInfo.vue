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
			v-if="$hasSlot('subtitle')"
			class="page-starter-info__subtitle">
			<slot name="subtitle" />
		</div>

		<div
			v-if="$hasSlot('actions')"
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
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/flex";
@import "assets/styles/mixins/font";
@import "assets/styles/mixins/mq";

.page-starter-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	row-gap: var(--indent-4);
	height: 100%;
	color: var(--white-color);

	&__subtitle {
		max-width: 1080px;
		text-align: center;

		@include font(16, regular);
	}

	&__actions {
		@include flex-h-center;
	}
}
</style>
