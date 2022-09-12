<template>
	<div class="lead-generation">
		<div class="lead-generation__decoration" />

		<div class="lead-generation__content container">
			<div class="lead-generation__info">
				<SectionTitle
					:title="title"
					:fluid="true"
					:uppercase="false"
					:center="device.isMobile || device.isTablet"
					:line-styles="{ backgroundColor: 'var(--secondary-color)' }"
					:theme="SectionTheme.ACCENT" />

				<div class="lead-generation__description">
					{{ description }}
				</div>

				<AchievementList class="lead-generation__achievements" />
			</div>

			<LeadGenerationForm class="lead-generation__form" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import AchievementList from '~/components/AchievementList.vue';
import LeadGenerationForm from '~/components/LeadGenerationForm.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import { SectionTheme } from '~/enums';

export default Vue.extend({
	name: 'LeadGenerationSection',
	components: { LeadGenerationForm, AchievementList, SectionTitle },
	data() {
		return {
			SectionTheme,
			title: 'Юридическиие услуги с гарантией результата',
			/* eslint-disable max-len */
			description: 'Мы успешно оказываем юридическую помощь в области семейного, административного, жилищного, гражданского и уголовного права',
		};
	},
});
</script>

<style lang="scss">
@import 'assets/styles/variables';
@import 'assets/styles/mixins/font';
@import 'assets/styles/mixins/mq';

$bottom-indent: 60px;

.lead-generation {
	position: relative;
	background-color: var(--secondary-color);

	&__content {
		position: relative;
		display: flex;
		flex-direction: column;

		@include mq(large-tablet) {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	&__info {
		padding: var(--indent-4) 0 var(--indent-5);

		@include mq(large-tablet) {
			padding: calc(140px - #{$bottom-indent} / 2) var(--indent-4) calc(140px + #{$bottom-indent} / 2);
			max-width: 820px;
		}
	}

	&__decoration {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: $bottom-indent;
		background: url('assets/img/lead-generation-bg.png') no-repeat;
		background-size: cover;

		@include mq(large-desktop) {
			outline: 2px solid var(--secondary-color);
			outline-offset: -24px;
		}
	}

	&__description {
		margin-top: var(--indent-2);
		color: var(--white-color);
		text-align: center;

		@include font(16, bold);

		@include mq(large-tablet) {
			text-align: left;
			margin-top: var(--indent-5);

			@include font(20, bold);
		}
	}

	&__achievements {
		margin: var(--indent-7) auto 0;

		@include mq(desktop) {
			margin: var(--indent-7) 0 0;
		}
	}

	&__form {
		max-width: 500px;
		margin: 0 auto;

		@include mq(large-tablet) {
			min-width: 400px;
		}

		@include mq(desktop) {
			margin-top: var(--indent-6);
			min-width: 500px;
		}

		@include mq(large-desktop) {
			margin-right: var(--indent-3);
		}
	}
}
</style>
