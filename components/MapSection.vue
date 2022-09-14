<template>
	<SectionWrapper class="map-section">
		<template #title>
			<SectionTitle
				:uppercase="false"
				:fluid="true"
				tag="p">
				{{ address }}
			</SectionTitle>
		</template>

		<div class="map-section__map">
			--- Map will be here ---
		</div>
	</SectionWrapper>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import Vue from 'vue';

import SectionTitle from '~/components/SectionTitle.vue';
import SectionWrapper from '~/components/SectionWrapper.vue';
import { useContactsStore } from '~/store/contacts';

export default Vue.extend({
	name: 'MapSection',
	components: { SectionWrapper, SectionTitle },
	computed: {
		...mapState(useContactsStore, ['address']),
	},
});
</script>

<style lang="scss" scoped>

</style>
