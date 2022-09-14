import { defineStore } from 'pinia';

interface RootState {
	address: string;
}

export const useCommonStore = defineStore('common', {
	state: (): RootState => ({
		address: '',
	}),
});
