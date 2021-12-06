<template>
  <section class="about-me" :style="{ ...bgStyles }">
    <div class="container about-me__inner">
      <div class="about-me__column">
        <div class="about-me__subtitle">{{ subtitle }}</div>
        <div class="about-me__title">{{ title }}</div>
        <div class="about-me__text" v-html="text" />
        <div class="about-me__buttons about-me__buttons--desktop">
          <button class="btn about-me__more-btn">{{ moreBtnText }}</button>
          <button class="btn btn--inverse about-me__contacts-btn">{{ contactsBtnText }}</button>
        </div>
      </div>
      <div class="about-me__column about-me__column_img">
        <div class="about-me__image">
          <img src="/images/about-me-img.jpg">
        </div>
      </div>
      <div class="about-me__buttons about-me__buttons--mobile">
        <button class="btn about-me__more-btn">{{ moreBtnText }}</button>
        <button class="btn btn--inverse about-me__contacts-btn">{{ contactsBtnText }}</button>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  props: {
    bgUrl: {
      type: String,
      default: '/images/about-me-bg.jpg'
    },
  },
  data() {
    return {
      title: 'Михайловский Денис Валериевич',
      subtitle: 'Адвокат',
      text: `
        <p>Я являюсь адвокатом с 2012 года. Моя юридическая практика начала формироваться 16 лет назад, когда я стал работать в судебной системе. За годы моей практики я сталкивался с различными юридическими ситуациями. Это позволило мне приобрести огромный опыт, наработать правовые знания, аналитическое и логическое мышление.</p>
        <p>На сегодняшний день я осуществляю профессиональную защиту интересов физических и юридических лиц. Благодаря солидному опыту берусь за сложные и запутанные дела, заставляю закон работать на моих доверителей. К решению любой проблемы, подхожу со всей ответственностью и пониманием, что простых дел не бывает - каждый случай индивидуальный. Обращаясь ко мне, вы можете рассчитывать на конфиденциальность и быть уверены в добросовестности и профессионализме оказываемых юридических услуг.</p>
      `,
      moreBtnText: 'Узнать больше обо мне',
      contactsBtnText: 'Контакты'
    }
  },
  computed: {
    bgStyles() {
      return {
        'background-image': `url(${this.bgUrl})`,
        'background-size': 'cover'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/mq";

.about-me {
  color: var(--white-color);

  &__inner {
    @extend %flex;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;

    @include mq(desktop) {
      padding-top: 120px;
      padding-bottom: 170px;
      flex-direction: row;
      column-gap: 12%;
    }
  }

  &__column {
    &_img {
      @include mq(large-desktop) {
        min-width: 32%;
      }
    }
  }

  &__image {
    @extend %flex-h-center;

    @include mq(desktop) {
      min-width: 340px;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 12px;
      border: 3px solid #959FC6;
    }
  }

  &__title {
    margin-bottom: 53px;
    color: var(--white-color);
    text-align: center;
    font-size: 32px;
    font-weight: var(--fw-bold);
    line-height: 1.45;
    text-transform: uppercase;

    @include mq(tablet) {
      font-size: 36px;
    }

    @include mq(desktop) {
      text-align: left;
    }

    &:after {
      content: '';
      margin-top: 25px;
      display: block;
      height: 4px;
      width: 100%;
      background-color: var(--white-color);
      border-radius: 4px;
    }
  }

  &__subtitle {
    margin-bottom: 5px;
    color: #A8B0CC;
    font-size: 24px;
    text-align: center;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    line-height: 1.45;
    letter-spacing: 16px;

    @include mq(desktop) {
      text-align: left;
    }
  }

  &__text {
    &::v-deep p {
      display: block;
      margin-bottom: 30px;
      line-height: 23px;
      font-size: 18px;
      font-weight: 400;
      text-align: center;

      @include mq(desktop) {
        text-align: left;
      }
    }
  }

  &__buttons {
    @extend %flex;
    flex-direction: column;
    row-gap: 20px;

    @include mq(tablet) {
      flex-direction: row;
      row-gap: unset;
      column-gap: 4%;
    }

    &--desktop {
      display: none;
      margin-top: 60px;

      @include mq(desktop) {
        display: flex;
      }
    }

    &--mobile {
      margin-top: 30px;

      @include mq(desktop) {
        display: none;
      }
    }
  }

  &__contacts-btn {
    @include mq(tablet) {
      min-width: 30%;
    }

    @include mq(large-tablet) {
      min-width: 35%;
    }

    @include mq(large-desktop) {
      min-width: 40%;
    }
  }

  &__more-btn {
    flex-grow: 1;
  }
}
</style>
