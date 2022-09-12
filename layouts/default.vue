<template>
	<div class="page-wrapper">
		<TheHeader />

		<main class="page-wrapper__content">
			<PageStarter :is-homepage="isHomepage">
				<HomePageStarterInfo v-if="isHomepage" />
				<PageStarterInfo v-else>
					<template
						v-if="title"
						#title>
						{{ title }}
					</template>

					<template
						v-if="subtitle"
						#subtitle>
						{{ subtitle }}
					</template>

					<template
						v-if="cta"
						#actions>
						<BaseButton>Записаться на консультацию</BaseButton>
					</template>
				</PageStarterInfo>
			</PageStarter>

			<Nuxt />
		</main>

		<TheFooter />
	</div>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import Vue from 'vue';

import BaseButton from '~/components/base/BaseButton.vue';
import HomePageStarterInfo from '~/components/HomePageStarterInfo.vue';
import TheFooter from '~/components/layout/TheFooter.vue';
import TheHeader from '~/components/layout/TheHeader.vue';
import PageStarter from '~/components/PageStarter.vue';
import PageStarterInfo from '~/components/PageStarterInfo.vue';
import { usePageStore } from '~/store/page';

export default Vue.extend({
	name: 'Default',
	components: {
		BaseButton,
		PageStarterInfo,
		HomePageStarterInfo,
		PageStarter,
		TheHeader,
		TheFooter,
	},
	computed: {
		...mapState(usePageStore, ['title', 'subtitle', 'cta']),
		isHomepage(): boolean {
			console.log(this.$route.path);

			return this.$route.path === '/';
		},
	},
});
</script>
