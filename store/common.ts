import { defineStore } from 'pinia';

interface RootState {
	counter: number;
}

export const useCommonStore = defineStore('common', {
	state: (): RootState => ({
		counter: 22,
	}),
});
