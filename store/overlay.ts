import { defineStore } from 'pinia';

interface OverlayState {
    isActive: boolean;
}

export const useOverlayStore = defineStore('overlay', {
	state: (): OverlayState => ({
		isActive: false,
	}),
	actions: {
		showOverlay(): void {
			this.isActive = true;
		},
		hideOverlay(): void {
			this.isActive = false;
		},
	},
});
