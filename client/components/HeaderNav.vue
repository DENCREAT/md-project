<template>
  <nav>
    <ul class="menu">
      <li v-for="item in items" :key="item.id" class="menu__item">
        <a :href="item.url" class="menu__item-link">{{ item.title }}</a>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import Vue from 'vue';
import {NavigationItem} from '~/interfaces';

export default Vue.extend({
  data() {
    return {
      items: [
        {
          title: 'Главная страница',
          url: '/'
        },
        {
          title: 'Обо мне',
          url: '/'
        },
        {
          title: 'Юридические услуги',
          url: '/'
        },
        {
          title: 'Успешные дела',
          url: '/'
        },
        {
          title: 'Про боно',
          url: '/'
        },
        {
          title: 'Блог',
          url: '/'
        },
        {
          title: 'Контакты',
          url: '/'
        },
      ] as NavigationItem[]
    }
  }
})
</script>
<style lang="scss" scoped>
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
    }

    &__item-link {
      text-transform: uppercase;
      white-space: nowrap;
    }
  }
</style>
