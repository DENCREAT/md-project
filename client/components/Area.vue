<template>
  <div class="area" :style="{ 'background-image': `url(${data.bgUrl})` }">
    <div class="area__title">{{ data.title }}</div>
    <div class="area__footer">
      <button class="btn btn--transparent area__btn">Узнать больше</button>
      <i class="area__icon">
        <img :src="data.iconUrl" alt="">
      </i>
    </div>
  </div>
</template>


<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";

.area {
  padding: 35px 55px 35px 30px;
  color: var(--white-color);
  background-size: cover;

  &__title {
    padding: 60px 0;
    max-width: 240px;
    font-size: 24px;
    font-weight: var(--fw-bold);
    line-height: 30px;
    text-transform: uppercase;

    @include mq(tablet) {
      max-width: 320px;
    }
  }

  &__icon {
    @extend %flex-center;
    @include size(36px);
  }

  &__footer {
    @extend %flex-v-center;
    column-gap: 17%;
  }

  &__btn {
    flex-grow: 1;
    padding-left: 30px;
    padding-right: 30px;

    @include mq(tablet) {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
}
</style>
