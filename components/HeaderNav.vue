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
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';

import { NavigationItem } from '~/interfaces';

export default Vue.extend({
	name: 'HeaderNav',
	data() {
		return {
			items: [
				{
					title: 'Главная страница',
					url: '/',
				},
				{
					title: 'Обо мне',
					url: '/',
				},
				{
					title: 'Юридические услуги',
					url: '/',
				},
				{
					title: 'Успешные дела',
					url: '/',
				},
				{
					title: 'Про боно',
					url: '/',
					forHidden: true,
				},
				{
					title: 'Блог',
					url: '/',
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

nav {
  position: relative;
  padding-bottom: 13px;

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
  display: flex;
  list-style: none;

  &__item {
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
  }

  &__item-link {
    text-transform: uppercase;
    white-space: nowrap;
  }
}
</style>
