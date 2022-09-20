<template>
	<transition
		v-if="isActive"
		name="fade">
		<div
			class="base-overlay"
			@click="onOverlayClick">
			<slot />
		</div>
	</transition>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import Vue from 'vue';

import { useOverlayStore } from '~/store/overlay';

export default Vue.extend({
	name: 'BaseOverlay',
	computed: {
		...mapState(useOverlayStore, ['isActive']),
	},
	methods: {
		...mapActions(useOverlayStore, ['hideOverlay']),
		onOverlayClick(): void {
			this.hideOverlay();
		},
	},
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/flex';
@import 'assets/styles/mixins/get-layer';

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.base-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	padding: var(--indent-2);
	background-color: rgba(var(--black-color-rgb), .5);
	transition: opacity .3s ease;
	backdrop-filter: blur(--overlay-blur);
	z-index: get-layer(overlay);
	transform: translate3d(0, 0, 0);

	@include flex-center;
}
</style>
