<template>
	<div class="wrapper">
		<a
			class="phone"
			href="tel:+79533435353">+7 (953) 343 53 53</a>

		<a
			class="action"
			href="#">Заказать звонок</a>
	</div>
</template>
<script>

export default {
	name: 'HeaderPhone',
};
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/font";

.wrapper {
	display: flex;
	flex-direction: column;
}

.phone {
	white-space: nowrap;

	@include font(15, bold);
}

.action {
	margin-top: 2px;
	color: var(--secondary-color);

	@include font(14, bold);
}
</style>
