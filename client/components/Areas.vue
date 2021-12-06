<template>
  <section class="areas">
    <div class="container">
      <h2 class="areas__title">{{ title }}</h2>
      <div class="areas__list">
        <Area
          v-for="item in areas"
          :key="item.id"
          :data="item"
          class="areas__item" />
      </div>
    </div>
  </section>
</template>


<script>
import Area from "./Area";
export default {
  components: {Area},
  data() {
    return {
      title: 'Сферы практики',
      areas: [
        {
          title: 'В сфере денежных обязательств',
          url: '/',
          bgUrl: '/images/area.jpg',
          iconUrl: '/images/area-icon.svg'
        },
        {
          title: 'В сфере недвижимости',
          url: '/',
          bgUrl: '/images/area.jpg',
          iconUrl: '/images/area-icon.svg'
        },
        {
          title: 'В сфере оказания услуг',
          url: '/',
          bgUrl: '/images/area.jpg',
          iconUrl: '/images/area-icon.svg'
        },
        {
          title: 'В сфере семейных правоотношений',
          url: '/',
          bgUrl: '/images/area.jpg',
          iconUrl: '/images/area-icon.svg'
        },
        {
          title: 'В сфере защиты прав автовладельцев',
          url: '/',
          bgUrl: '/images/area.jpg',
          iconUrl: '/images/area-icon.svg'
        },
        {
          title: 'В сфере уголовных и иных дел',
          url: '/',
          bgUrl: '/images/area.jpg',
          iconUrl: '/images/area-icon.svg'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/mq";

.areas {
  padding: 30px 0;

  @include mq(desktop) {
    padding-top: 70px;
    padding-bottom: 160px;
  }

  &__title {
    margin-bottom: 25px;
    max-width: 420px;
    font-size: 30px;
    font-weight: var(--fw-bold);
    color: #1A2038;
    text-transform: uppercase;
    line-height: 38px;

    @include mq(tablet) {
      margin-bottom: 35px;
    }

    @include mq(desktop) {
      margin-bottom: 50px;
      font-size: 32px;
    }

    @include mq(large-desktop) {
      margin-bottom: 70px;
    }

    &:after {
      content: '';
      margin-top: 20px;
      display: block;
      height: 4px;
      width: 100%;
      background-color: var(--secondary-color);
      border-radius: 4px;
    }
  }

  &__list {
    @extend %flex;
    flex-direction: column;
    row-gap: 24px;

    @include mq(860px) {
      flex-direction: row;
      column-gap: 24px;
      flex-wrap: wrap;
    }
  }

  &__item {
    @include mq(860px) {
      width: calc(100% / 2 - 24px / 2);
    }

    @include mq(wide) {
      width: calc(100% / 3 - 24px / 3 * 2);
    }
  }
}
</style>
