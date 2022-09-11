<template>
	<div class="base-form">
		<SectionTitle
			:title="title"
			:theme="SectionTheme.ACCENT"
			:center="true"
			:fluid="true"
			:line-styles="{
				backgroundColor: 'var(--form-control-border-color)',
				height: '1px',
				marginTop: 'var(--indent-2)'
			}"
			tag="h3" />

		<div class="base-form__subtitle">
			{{ subtitle }}
		</div>

		<form class="base-form__control">
			<slot />
		</form>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import SectionTitle from '~/components/SectionTitle.vue';
import { SectionTheme } from '~/enums';

export default Vue.extend({
	name: 'BaseForm',
	components: { SectionTitle },
	props: {
		title: String,
		subtitle: String,
	},
	data() {
		return {
			SectionTheme,
		};
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/font";

.base-form {
	display: flex;
	flex-direction: column;

	&__control {
		display: flex;
		flex-direction: column;
		row-gap: var(--indent-2);
	}

	&__subtitle {
		margin: var(--indent-2) 0 var(--indent-5);
		color: var(--white-color);
		text-transform: uppercase;
		text-align: center;

		@include font(12, bold);
	}
}
</style>
