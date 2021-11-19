<template>
  <div class="footer">
    <div class="container footer__inner">
      <div class="footer__column footer__logo">
        <Logo :variant="logoTypes.BIG" />
      </div>
      <div class="footer__column">
        <nav>
          <ul class="footer__nav">
            <li
              v-for="item in navItems"
              :key="item.id"
              class="footer__nav-item">
              <a :href="item.url" class="footer__nav-link">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__column">
        <nav>
          <ul class="footer__nav">
            <li
              v-for="item in addNavItems"
              :key="item.id"
              class="footer__nav-item">
              <a :href="item.url" class="footer__nav-link simple">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__column">4</div>
      <div class="footer__column">5</div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import {LogoTypes} from '~/enums';
import Logo from '~/components/Logo.vue';
import {NavigationItem} from '~/interfaces';

export default Vue.extend({
  components: {Logo},
  data() {
    return {
      logoTypes: LogoTypes,
      navItems: [
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
      ] as NavigationItem[],
      addNavItems: [
        {
          title: 'Сфера подряда',
          url: '/'
        },
        {
          title: 'Сфера недвижимости',
          url: '/'
        },
        {
          title: 'Сфера оказания услуг и торговли',
          url: '/'
        },
        {
          title: 'Сфера гражданских и иных дел',
          url: '/'
        },
        {
          title: 'Сфера банкротства',
          url: '/'
        },
        {
          title: 'Сфера денежных обязательств',
          url: '/'
        },
      ] as NavigationItem[]
    }
  }
})
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";

.footer {
  padding: 70px 0;
  background-color: #3F4868;

  &__inner {
    @extend %flex;
    justify-content: space-between;
  }

  &__nav-link {
    display: inline-flex;
    padding: 4px 0;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 900;
    color: #A7AEC8;
    transition: color .13s ease-in-out;

    &:hover {
      color: var(--white-color);
    }

    &.simple {
      text-transform: initial;
      margin-bottom: 5px;
    }
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
