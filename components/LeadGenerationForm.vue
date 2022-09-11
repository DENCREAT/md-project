<template>
	<form class="lead-generation-form base-form">
		<BaseForm
			:title="title"
			:subtitle="subtitle">
			<BaseFormGroup>
				<BaseInput placeholder="Ваше имя *" />
			</BaseFormGroup>

			<BaseFormGroup>
				<BaseInput placeholder="Номер телефона *" />
			</BaseFormGroup>

			<BaseFormGroup>
				<BaseTextarea placeholder="Краткое описание ситуации (необязательно)" />
			</BaseFormGroup>

			<BaseFormGroup>
				<BaseButton :fluid="true">
					Записаться
				</BaseButton>
			</BaseFormGroup>
		</BaseForm>
	</form>
</template>

<script lang="ts">
import Vue from 'vue';

import BaseButton from '~/components/base/BaseButton.vue';
import BaseForm from '~/components/base/BaseForm.vue';
import BaseFormGroup from '~/components/base/BaseFormGroup.vue';
import BaseInput from '~/components/base/BaseInput.vue';
import BaseTextarea from '~/components/base/BaseTextarea.vue';

export default Vue.extend({
	name: 'LeadGenerationForm',
	components: { BaseButton, BaseTextarea, BaseFormGroup, BaseInput, BaseForm },
	data() {
		return {
			title: 'Запишитесь на <br> бесплатную консультацию',
			subtitle: 'Оставьте заявку и с вами свяжутся в течение 15 минут',
		};
	},
});
</script>

<style lang="scss">
@import 'assets/styles/mixins/mq';

.lead-generation-form {
	padding: var(--indent-3) var(--indent-2);
	background-color: var(--primary-light-color);
	border: var(--base-indent) solid var(--secondary-color);

	@include mq(tablet) {
		padding: var(--indent-5) var(--indent-3);
	}
}
</style>
