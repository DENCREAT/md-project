import { defineStore } from 'pinia';

import { NavigationItem } from '~/interfaces';
import { useOverlayStore } from '~/store/overlay';
import { forbidScroll } from '~/utils';

interface NavigationState {
	items: NavigationItem[];
	isMobileMenuActive: boolean;
}

export const useNavigationStore = defineStore('navigation', {
	state: (): NavigationState => ({
		isMobileMenuActive: false,
		items: [
			{
				title: 'Главная страница',
				url: '/',
			},
			{
				title: 'Обо мне',
				url: '/about-us',
			},
			{
				title: 'Юридические услуги',
				url: '/services',
				children: [
					{
						title: 'Защита прав автовладельцев',
						url: '/services',
						children: [
							{
								title: 'Юрист по ДТП',
								url: '/services',
							},
							{
								title: 'Споры со страховой компанией',
								url: '/services',
							},
							{
								title: 'Оставление места ДТП',
								url: '/services',
							},
							{
								title: 'Споры с автосалонами',
								url: '/services',
							},
							{
								title: 'Оспаривание протолколов',
								url: '/services',
							},
						],
					},
					{
						title: 'Сфера недвижимости',
						url: '/services',
						children: [
							{
								title: 'Юрист по ДТП',
								url: '/services',
							},
							{
								title: 'Споры со страховой компанией',
								url: '/services',
							},
							{
								title: 'Оставление места ДТП',
								url: '/services',
							},
							{
								title: 'Споры с автосалонами',
								url: '/services',
							},
							{
								title: 'Оспаривание протолколов',
								url: '/services',
							},
						],

					},
					{
						title: 'Сфера оказания услуг',
						url: '/services',
					},
					{
						title: 'Гражданские и иные дела',
						url: '/services',
					},
					{
						title: 'Семейные правоотношения',
						url: '/services',
					},
					{
						title: 'Сфера денежных обязательств',
						url: '/services',
					},
				],
			},
			{
				title: 'Успешные дела',
				url: '/affairs',
			},
			{
				title: 'Про боно',
				url: '/bono',
				forHidden: true,
			},
			{
				title: 'Блог',
				url: '/blog',
				forHidden: true,
			},
			{
				title: 'Контакты',
				url: '/contacts',
			},
		],
	}),
	getters: {
		list(state): NavigationItem[] {
			return addIdToMenuItem(state.items);
		},
	},
	actions: {
		showMobileMenu(preventCircular = false): void {
			this.isMobileMenuActive = true;
			forbidScroll(true);
			!preventCircular && useOverlayStore().showOverlay();
		},
		hideMobileMenu(preventCircular = false): void {
			this.isMobileMenuActive = false;
			forbidScroll(false);
			!preventCircular && useOverlayStore().hideOverlay();
		},
	},
});

function addIdToMenuItem(data: NavigationItem[]): NavigationItem[] {
	return data.map((child: NavigationItem) => ({
		...child,
		id: Symbol('id'),
		...(child.children && { children: addIdToMenuItem(child.children) }),
	}));
}
