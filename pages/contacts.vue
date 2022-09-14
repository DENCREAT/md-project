<template>
	<div class="page page-contacts">
		<InfoSection class="page__info page__info--first">
			<ContactsSection />
		</InfoSection>

		<MapSection class="page-contacts__map" />

		<LeadGenerationSection />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import ContactsSection from '~/components/ContactsSection.vue';
import InfoSection from '~/components/InfoSection.vue';
import LeadGenerationSection from '~/components/LeadGenerationSection.vue';
import MapSection from '~/components/MapSection.vue';

export default Vue.extend({
	name: 'Contacts',
	components: { MapSection, ContactsSection, InfoSection, LeadGenerationSection },
});
</script>

<style lang="scss">
.page-contacts {
	&__map {
		margin-bottom: var(--indent-5);
	}
}
</style>
