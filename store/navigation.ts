import { defineStore } from 'pinia';

import { NavigationItem } from '~/interfaces';

interface NavigationState {
	items: NavigationItem[];
}

export const useNavigationStore = defineStore('navigation', {
	state: (): NavigationState => ({
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
});
