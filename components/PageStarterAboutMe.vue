<template>
	<div class="page-starter-about-me">
		<PageStarterText class="page-starter-about-me__content">
			<template #title>
				{{ parsedFullName[0] }}
				<br>
				{{ parsedFullName[1] }}
			</template>

			<template #description>
				<div v-html="aboutMe" />
			</template>
		</PageStarterText>
	</div>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import Vue from 'vue';

import PageStarterText from '~/components/PageStarterText.vue';
import { useContactsStore } from '~/store/contacts';

export default Vue.extend({
	name: 'PageStarterAboutMe',
	components: { PageStarterText },
	computed: {
		...mapState(useContactsStore, ['fullName', 'aboutMe']),
		parsedFullName(): string[] {
			const [first, ...end] = this.fullName.split(' ');

			return [first, end.join(' ')];
		},
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/flex";
@import "assets/styles/mixins/font";
@import "assets/styles/mixins/mq";

.page-starter-about-me {
	height: 100%;
	width: 100%;

	@include mq(tablet) {
		max-width: 460px;
	}

	@include mq(large-tablet) {
		max-width: 520px;
	}

	@include mq(wide) {
		max-width: 585px;
	}

	@include flex-v-center;

	&__content {
		background: rgba(var(--primary-color-rgb), .7);
		box-shadow: 0 0 40px 30px rgba(var(--primary-color-rgb), .7);

		@include mq(tablet) {
			box-shadow: 0 0 70px 50px rgba(var(--primary-color-rgb), .7);
		}

		@include mq(large-tablet) {
			background: none;
			box-shadow: none;
		}
	}
}
</style>
