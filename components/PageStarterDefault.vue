<template>
	<PageStarterInfo>
		<template
			v-if="title"
			#title>
			{{ title }}
		</template>

		<template
			v-if="description"
			#subtitle>
			{{ description }}
		</template>

		<template
			v-if="cta"
			#actions>
			<BaseButton :text="makeRequestBtn" />
		</template>
	</PageStarterInfo>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import Vue from 'vue';

import BaseButton from '~/components/base/BaseButton.vue';
import PageStarterInfo from '~/components/PageStarterInfo.vue';
import { useStaticStore } from '~/store/static';

export default Vue.extend({
	name: 'PageStarterDefault',
	components: { PageStarterInfo, BaseButton },
	props: {
		title: String,
		description: String,
		cta: Boolean,
	},
	computed: {
		...mapState(useStaticStore, ['makeRequestBtn']),
	},
});
</script>

<style lang="scss" scoped>

</style>
