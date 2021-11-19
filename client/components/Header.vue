<template>
  <div>
    <div class="container inner">
      <Logo :variant="logoTypes.GRAY"/>
      <HeaderNav/>
      <HeaderPhone/>
    </div>
  </div>
</template>
<script>
import HeaderNav from './HeaderNav';
import Logo from './Logo';
import { LogoTypes } from '~/enums';
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
  .inner {
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
