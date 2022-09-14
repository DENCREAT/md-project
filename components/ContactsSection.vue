<template>
	<div class="contacts">
		<div class="contacts__info">
			<SectionTitle
				:fluid="true"
				title="Контакты"
				class="contacts__title"
				tag="h3" />

			<div class="contacts__content">
				<div class="contacts__item">
					<b>Телефон:</b>
					<PhoneLink :inherit="true" />
				</div>

				<div class="contacts__item">
					<b>Режим работы:</b>
					Пн – Пт: с 10:00 до 21:00<br>
					Сб – Вс: выходные дни
				</div>

				<div class="contacts__item">
					<b>Социальные сети:</b>
					<a
						href="/facebook"
						class="contacts__link">Facebook</a>
					<a
						href="/facebook"
						class="contacts__link">Instagram</a>
				</div>
			</div>
		</div>

		<div class="contacts__requisites">
			<SectionTitle
				:fluid="true"
				title="Реквизиты"
				class="contacts__title"
				tag="h3" />

			<div class="contacts__content">
				<div class="contacts__item">
					<b>Регистрационный номер в реестре адвокатов: 77/14287</b>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { mapState } from 'pinia';
import Vue from 'vue';

import PhoneLink from '~/components/PhoneLink.vue';
import SectionTitle from '~/components/SectionTitle.vue';
import { useContactsStore } from '~/store/contacts';

export default Vue.extend({
	name: 'ContactsSection',
	components: { PhoneLink, SectionTitle },
	computed: {
		...mapState(useContactsStore, ['phone']),
	},
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/font';
@import 'assets/styles/mixins/mq';

.contacts {
	display: flex;
	flex-direction: column;
	row-gap: var(--indent-8);

	@include mq(desktop) {
		flex-direction: row;
		column-gap: var(--indent-10);
	}

	&__title {
		margin-bottom: var(--indent-3);

		@include mq(tablet) {
			margin-bottom: var(--indent-5);
		}
	}

	&__content {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		gap: var(--indent-4);

		@include mq(tablet) {
			flex-direction: row;
			gap: var(--indent-3);
		}
	}

	&__link {
		color: var(--secondary-color);

		@include font(14);
	}

	&__phone {
		color: var(--primary-text-color);

		@include font(20);
	}

	&__info {
		flex-basis: 70%;

		@include font(18);
	}

	&__item {
		display: flex;
		flex-basis: 30%;
		flex-grow: 1;
		flex-direction: column;
		row-gap: var(--base-indent);
	}

	&__requisites {
		flex-basis: 30%;
	}
}
</style>
