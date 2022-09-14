<template>
	<div
		class="social"
		:style="{ gap }"
		:class="{
			'social--vertical': vertical,
			'social--transparent': transparent,
		}">
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
		gap: {
			type: String,
			default: '10px',
		},
		transparent: Boolean,
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
					code: 'whatsapp',
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
	$root: &;

	@include flex-v-center;

	&__link {
		text-decoration: none;
		color: var(--white-color);
		font-size: 12px;
		cursor: pointer;
		border-radius: 50%;
		background-color: #646E8F;
		transition: var(--fast-transition);

		@include flex-center;
		@include size(26px);

		&:hover {
			background-color: var(--secondary-color);
		}
	}

	&--vertical {
		flex-direction: column;

		@include flex-h-center;
	}

	&--transparent {
		#{$root}__link {
			background-color: transparent;
			font-size: 22px;
			color: #737EAC;

			&:hover {
				color: var(--white-color);
				background-color: transparent;
			}
		}
	}
}

</style>
