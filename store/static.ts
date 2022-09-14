import { defineStore } from 'pinia';

interface StaticState {
    makeRequestBtn: string;
}

export const useStaticStore = defineStore('static', {
	state: (): StaticState => ({
		makeRequestBtn: 'Записаться на консультацию',
	}),
});
