<template>
	<div class="wrapper">
		<PhoneLink />

		<a
			class="action"
			href="#">Заказать звонок</a>
	</div>
</template>
<script>

import PhoneLink from '~/components/PhoneLink';
export default {
	name: 'HeaderPhone',
	components: { PhoneLink },
};
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/font";

.wrapper {
	display: flex;
	flex-direction: column;
}

.action {
	margin-top: 2px;
	color: var(--secondary-color);

	@include font(14, bold);
}
</style>
