<template>
	<div
		class="social"
		:class="{ 'social--vertical': vertical }">
		<a
			v-for="{ name, url, code } in items"
			:key="code"
			:href="url"
			:target="Target.BLANK"
			:aria-label="name"
			:title="name"
			class="social__link">
			<i :class="`icon-${code}`" />
		</a>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Target } from '~/enums';

export default Vue.extend({
	name: 'SocialList',
	props: {
		vertical: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			Target,
			items: [
				{
					name: 'Telegram',
					code: 'telegram',
					url: 'https://t.me/Mikhailovskyspb',
				},
				{
					name: 'WhatsApp',
					code: 'watsup',
					url: 'https://wa.me/79990204000',
				},
				{
					name: 'Instagram',
					code: 'instagram',
					url: 'https://www.instagram.com/advocat_mihailovski',
				},
				{
					name: 'Facebook',
					code: 'facebook',
					url: 'https://www.facebook.com/profile.php?id=100078006937422',
				},
			],
		};
	},
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/flex';
@import 'assets/styles/mixins/size';

.social {
	gap: 10px;

	@include flex-v-center;

	&--vertical {
		flex-direction: column;

		@include flex-h-center;
	}

	&__link {
		text-decoration: none;
		color: var(--white-color);
		transition: background-color .13s ease-in-out;
		font-size: 12px;
		cursor: pointer;
		border-radius: 50%;
		background-color: #646E8F;

		@include flex-center;
		@include size(26px);

		&:hover {
			background-color: var(--secondary-color);
		}
	}
}

</style>
