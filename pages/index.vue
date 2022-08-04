<template>
	<div>
		<PageStarter
			css-class="page-starter--homepage"
			:bg-from-styles="true">
			<HomePageStarterInfo />
		</PageStarter>
		<Areas />
		<AboutMe />
		<Affairs />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import AboutMe from '~/components/AboutMe.vue';
import Affairs from '~/components/Affairs.vue';
import Areas from '~/components/Areas.vue';
import HomePageStarterInfo from '~/components/HomePageStarterInfo.vue';
import PageStarter from '~/components/PageStarter.vue';

export default Vue.extend({
	name: 'Index',
	components: { Affairs, Areas, AboutMe, HomePageStarterInfo, PageStarter },
});
</script>
