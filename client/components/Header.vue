<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <Logo :variant="logoTypes.GRAY" class="header__logo"/>
        <HeaderNav/>
        <HeaderPhone class="header__phone"/>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderNav from './HeaderNav';
import Logo from './Logo';
import {LogoTypes} from '~/enums';
import HeaderPhone from '~/components/HeaderPhone';

export default {
  components: {HeaderPhone, Logo, HeaderNav},
  data() {
    return {
      logoTypes: LogoTypes
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";

.header {
  &__inner {
    @extend %flex-v-center;
    padding: 50px 0;
    justify-content: space-between;
  }

  &__logo {
    margin-right: 30px;
  }

  &__phone {
    margin-left: 30px;
  }
}
</style>
