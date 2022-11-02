import { defineStore } from 'pinia';

import { API_URLS } from '~/api';
import { PageType } from '~/enums';
import { Page } from '~/interfaces';
import { tPickKeys } from '~/utils/pickKeys';

interface PageState {
	page: Page;
	categories: any[];
}

export const usePageStore = defineStore('page', {
	state: (): PageState => ({
		categories: [],
		page: {} as Page,
	}),
	actions: {
		async loadPage(id: string, type: PageType) {
			const url = getApiUrlType(type);
			const { data } = await this.$axios.get(`${url}${id}`);

			console.log(data);

			this.page = tPickKeys<Page>(data, Page);
		},
		async loadCategories() {
			if (this.categories.length) return;

			const { data } = await this.$axios.get(API_URLS.categoriesTree);

			this.categories = data;
		},
	},
});

function getApiUrlType(type: PageType) {
	if (type === PageType.PAGE) return API_URLS.pages;

	if (type === PageType.POST) return API_URLS.posts;

	if (type === PageType.CATEGORY) return API_URLS.categories;
}
