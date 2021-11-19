<template>
  <div>
    <div class="wrapper">
      <h1 class="title">{{ title }}</h1>
      <div class="description">{{ description }}</div>
      <button class="btn btn--big">{{ btnText }}</button>
      <div class="add-info">{{ addInfo }}</div>
      <div class="achievements">
        <HomePageAchievement
          v-for="achievement in achievements"
          :achievement="achievement"
          :key="achievement.id"/>
      </div>
    </div>
  </div>
</template>
<script>

import HomePageAchievement from "~/components/HomePageAchievement";
export default {
  components: {HomePageAchievement},
  data() {
    return {
      title: 'Юридические услуги с гарантией результата',
      description: 'Мы успешно оказываем юридическую помощь в области семейного, административного, жилищного, гражданского и уголовного права',
      addInfo: 'Получите детальный анализ вашей ситуаци и план по ее разрешению совершенно бесплатно',
      btnText: 'Записаться на консультацию',
      achievements: [
        {
          count: '15',
          comment: 'лет',
          text: 'успешной работы'
        },
        {
          count: '60+',
          comment: '',
          text: 'консультаций в месяц'
        },
        {
          count: '250',
          comment: 'дел',
          text: 'в пользу наших клиентов'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";

.wrapper {
  padding-top: 150px;
  max-width: 590px;
}

.title {
  margin-bottom: 30px;
  font-size: 42px;
  font-weight: var(--fw-bold);
  line-height: 54px;
  color: var(--white-color);
}

.description {
  margin-bottom: 65px;
  font-size: 20px;
  color: var(--white-color);
  font-weight: var(--fw-bold);
  line-height: 25px;
}

.add-info {
  margin-top: 37px;
  max-width: 390px;
  font-size: 14px;
  line-height: 18px;
  font-weight: var(--fw-bold);
  color: #8891B2;
}

.achievements {
  @extend %flex;
  max-width: 460px;
  margin-top: 65px;
  column-gap: 60px;
}
</style>
