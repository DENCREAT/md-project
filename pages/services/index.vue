<template>
	<div class="page">
		<InfoSection title="Some title">
			dsfsdfsfdsfsdfsfds
		</InfoSection>

		<CategoriesSection />

		<TextSection title="Some text info">
			fdsfdsdfdsfdfsdf
		</TextSection>

		<QuoteSection text="dsfsdfsdfdsfs dfsadhjf dasfv kshf fdh dfhj gdhjf gsdfhj dkhgjf dsjghj" />
		<LeadGenerationSection />
	</div>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import Vue from 'vue';

import CategoriesSection from '~/components/CategoriesSection.vue';
import InfoSection from '~/components/InfoSection.vue';
import LeadGenerationSection from '~/components/LeadGenerationSection.vue';
import QuoteSection from '~/components/QuoteSection.vue';
import TextSection from '~/components/TextSection.vue';
import { usePageStore } from '~/store/page';

export default Vue.extend({
	name: 'Services',
	components: { QuoteSection, TextSection, InfoSection, CategoriesSection, LeadGenerationSection },
	async asyncData() {
		await usePageStore().loadCategories();
	},
	computed: {
		...mapState(usePageStore, ['categories']),
	},
});
</script>
