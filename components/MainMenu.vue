<template>
	<nav>
		<ul class="menu">
			<li
				v-for="(item, index) in items"
				:key="index"
				class="menu__item"
				:class="{ 'hidden': item.forHidden }">
				<NuxtLink
					:to="item.url"
					class="menu__item-link">
					{{ item.title }}
				</NuxtLink>

				<SubMenu
					:items="item.children"
					class="menu__submenu" />
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';

import SubMenu from '~/components/SubMenu.vue';
import { NavigationItem } from '~/interfaces';

export default Vue.extend({
	name: 'MainMenu',
	components: { SubMenu },
	data() {
		return {
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
			] as NavigationItem[],
		};
	},
});
</script>
<style lang="scss" scoped>
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/get-layer";
@import "assets/styles/mixins/size";

$menu-indent: 12px;

nav {
	position: relative;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 3px;
		border-radius: 1.5px;
		background-color: var(--secondary-color);
	}
}

.menu {
	$root: &;
	display: flex;
	list-style: none;
	color: var(--white-color);

	&__submenu {
		opacity: 0;
		top: calc(100% + var(--base-indent));
		left: calc(var(--indent-2) * -1);
		transform: translateY(-200%);
		transition: all .52s ease-in-out;
	}

	&__item {
		position: relative;

		& + & {
			margin-left: 15px;
		}

		&.hidden {
			@include mq(desktop) {
				display: none;
			}
			@include mq(large-desktop) {
				display: inline-block;
			}
		}

		&:hover {
			#{$root}__submenu {
				opacity: 1;
				transform: translateY(0);
			}
		}
	}

	&__item-link {
		display: block;
		padding-bottom: $menu-indent;
		text-transform: uppercase;
		white-space: nowrap;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			background-color: transparent;
			z-index: get-layer(initial);
			transition: all .26s ease-in-out;

			@include size(100%, 0);
		}

		&.nuxt-link-exact-active,
		&:hover {
			&::after {
				height: 3px;
				background-color: var(--white-color);
			}
		}
	}
}
</style>
