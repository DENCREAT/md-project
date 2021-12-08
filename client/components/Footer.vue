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
      <div class="footer__column footer__column_privacy">
        <a href="#" class="footer__nav-link simple footer__privacy-link">Конфиденциальность и <br>безопасность</a>
        <p class="footer__copyright">{{ copyright }}</p>
      </div>
      <div class="footer__column footer__column_contact">
        <div class="footer__contact">
          <a href="tel:+79533435353" class="footer__phone">+7 (953) 343 53 53</a>
          <p class="footer__address" v-html="address" />
        </div>
      </div>
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
      copyright: '© «MIHAYLOVSKY», 2012 - 2021',
      address: '190005, г. Санкт - Петербург, Измайловский проспеет,<br>18д, офис 27 Н<br>(м. Технологический институт-1)',
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
          title: 'Успешные дела/процессы',
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
          title: 'Сфера денежных обязательств',
          url: '/'
        },
        {
          title: 'Сфера недвижимости',
          url: '/'
        },
        {
          title: 'Сфера оказания услуг',
          url: '/'
        },
        {
          title: 'Сфера семейных правоотношений',
          url: '/'
        },
        {
          title: 'Сфера защиты прав автовладельцев',
          url: '/'
        },
        {
          title: 'Сфера уголовных и иных дел',
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

  &__column {
    &_privacy {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 30px;
    }
  }

  &__privacy-link {
    font-size: 11px;
  }

  &__phone {
    font-size: 18px;
    font-weight: 700;
  }

  &__contact {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__copyright {
    margin-bottom: 22px;
    color: #9298AE;
    font-size: 10px;
  }

  &__address {
    margin-top: 28px;
    color: var(--white-color);
    text-align: right;
    font-size: 12px;
    font-weight: 800;
    line-height: 1.43;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
