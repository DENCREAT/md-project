<template>
  <section>
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/mq";
section {
  padding: 30px 0;

  @include mq(desktop) {
    padding-top: 80px;
    padding-bottom: 120px;
  }
}

.title {
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
</style>
