<template>
  <div class="wrapper">
    <a class="phone" href="tel:+79533435353">+7 (953) 343 53 53</a>
    <a class="action" href="#">Заказать звонок</a>
  </div>
</template>
<script>

export default {
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .phone {
    font-size: 15px;
    line-height: 18px;
    font-weight: var(--fw-bold);
    white-space: nowrap;
  }

  .action {
    margin-top: 2px;
    font-size: 14px;
    line-height: 18px;
    color: var(--secondary-color);
    font-weight: var(--fw-bold);
  }
</style>
