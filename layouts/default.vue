<template>
	<div class="page-wrapper">
		<TheHeader />

		<main class="page-wrapper__content">
			<PageStarter :is-full-screen="isFullScreen">
				<component
					:is="dynamicPageStarter"
					v-if="isFullScreen" />

				<PageStarterDefault
					v-else
					:title="title"
					:description="description"
					:cta="cta" />
			</PageStarter>

			<Nuxt />
		</main>

		<TheFooter />

		<DynamicDialog ref="dialogDynamic" />
	</div>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import Vue, { VueConstructor } from 'vue';

import BaseButton from '~/components/base/BaseButton.vue';
import DynamicDialog from '~/components/DynamicDialog.vue';
import TheFooter from '~/components/layout/TheFooter.vue';
import TheHeader from '~/components/layout/TheHeader.vue';
import PageStarter from '~/components/PageStarter.vue';
import PageStarterDefault from '~/components/PageStarterDefault.vue';
import HomePageStarterInfo from '~/components/PageStarterHomepage.vue';
import PageStarterInfo from '~/components/PageStarterInfo.vue';
import { dialogDynamicService } from '~/services/dialog-dynamic-service';
import { usePageStore } from '~/store/page';
import { DialogInstance } from '~/types';

export default (Vue as VueConstructor<
	Vue &
	{
		$refs: {
			dialogDynamic: DialogInstance,
		};
	}
	>).extend({
	name: 'Default',
	components: {
		PageStarterDefault,
		DynamicDialog,
		BaseButton,
		PageStarterInfo,
		HomePageStarterInfo,
		PageStarter,
		TheHeader,
		TheFooter,
	},
	computed: {
		...mapState(usePageStore, ['title', 'description', 'cta']),
		isFullScreen(): boolean {
			return this.$route.path === '/' || this.$route.path === '/about-us';
		},
		dynamicPageStarter(): string {
			switch (this.$route.path) {
				case '/': return 'HomePageStarterInfo';
				case '/about-us': return 'PageStarterAboutMe';
				default: return '';
			}
		},
	},
	mounted() {
		dialogDynamicService.init(this.$refs.dialogDynamic);
	},
});
</script>
