<template>
  <SectionLightWrapper class="affairs" :title="title">
    <div class="affairs__list">
      <AffairItem
        v-for="item in affairs"
        :key="item.id"
        :data="item"
        class="affairs__item" />
    </div>
    <ShowAll url="/" title="Смотреть все дела" class="affairs__show-all"/>
  </SectionLightWrapper>
</template>

<script>
import SectionLightWrapper from "~/components/SectionLightWrapper";
import AffairItem from "~/components/AffairItem";
import ShowAll from "~/components/ShowAll";
export default {
  components: {ShowAll, AffairItem, SectionLightWrapper},
  data() {
    return {
      title: 'Мои успешные дела',
      affairs: [
        {
          title: 'Доверитель защищён от чёрных риелторов по договору займа с одновременным залогом имущества',
          url: '/',
          imgUrl: '/images/affair.png',
        },
        {
          title: 'В пользу моего доверителя завершён судебный спор против автосалона',
          url: '/',
          imgUrl: '/images/affair.png',
        },
        {
          title: 'Пожар, потоп: как не стать жертвой управляющей компании',
          url: '/',
          imgUrl: '/images/affair.png',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/mq";

.affairs {
  &__list {
    @extend %flex;
    flex-direction: column;
    row-gap: 40px;

    @include mq(860px) {
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 40px;
    }
  }

  &__item {
    margin: 0 auto;

    @include mq(860px) {
      width: calc(100% / 2 - 40px / 2);
    }

    @include mq(large-desktop) {
      width: calc(100% / 3 - 40px / 3 * 2);
    }
  }

  &__show-all {
    margin-top: 50px;

    @include mq(desktop) {
      margin-top: 90px;
    }
  }
}
</style>
