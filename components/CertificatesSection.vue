<template>
	<SectionWrapper
		:title-fluid="true"
		:title-center="true"
		:theme="SectionTheme.DARK"
		title="Сертификаты и награды"
		class="certificates">
		<BaseImageCarousel
			ref="certificatesCarousel"
			:items="items" />

		<SectionPagination
			class="certificates__actions"
			@next="onNext"
			@prev="onPrev" />
	</SectionWrapper>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

import BaseImageCarousel from '~/components/base/BaseImageCarousel.vue';
import SectionPagination from '~/components/SectionPagination.vue';
import SectionWrapper from '~/components/SectionWrapper.vue';
import { SectionTheme } from '~/enums';
import { BaseImageCarouselInstance } from '~/types';

export default (Vue as VueConstructor<Vue & {
	$refs: {
		certificatesCarousel: BaseImageCarouselInstance,
	}
}>).extend({
	name: 'CertificatesSection',
	components: { SectionPagination, SectionWrapper, BaseImageCarousel },
	data() {
		return {
			SectionTheme,
			items: [
				{
					image: {
						preview: 'https://capgemini-engineering.com/as-content/uploads/sites/31/2021/05/certificate-tuv-iso-9001-2016.png',
						url: 'https://capgemini-engineering.com/as-content/uploads/sites/31/2021/05/certificate-tuv-iso-9001-2016.png',
					},
				},
				{
					image: {
						preview: 'https://data.unhcr.org/images/documents/big_4cda85d892a5c0b5dd63b510a9c83e9c9d06e739.jpg',
						url: 'https://data.unhcr.org/images/documents/big_4cda85d892a5c0b5dd63b510a9c83e9c9d06e739.jpg',
					},
				},
				{
					image: {
						preview: 'https://4ww1y37tl91gmoej12r01u1c-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/TextDocument.png',
						url: 'https://4ww1y37tl91gmoej12r01u1c-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/TextDocument.png',
					},
				},
				{
					image: {
						preview: 'https://tefl-tesol-certificate.com/images/2020/04/18/certificate.jpg',
						url: 'https://tefl-tesol-certificate.com/images/2020/04/18/certificate.jpg',
					},
				},
				{
					image: {
						preview: 'https://c8.alamy.com/comp/2JNPHT4/certificate-border-grey-ornamental-frame-for-certificate-blank-vector-illustration-2JNPHT4.jpg',
						url: 'https://c8.alamy.com/comp/2JNPHT4/certificate-border-grey-ornamental-frame-for-certificate-blank-vector-illustration-2JNPHT4.jpg',
					},
				},
				{
					image: {
						preview: 'https://tefl-tesol-certificate.com/images/2020/03/11/accrincouk.jpg',
						url: 'https://tefl-tesol-certificate.com/images/2020/03/11/accrincouk.jpg',
					},
				},
			],
		};
	},
	methods: {
		onNext(): void {
			this.$refs.certificatesCarousel.next();
		},
		onPrev(): void {
			this.$refs.certificatesCarousel.prev();
		},
	},
});
</script>

<style lang="scss" scoped>
.certificates {
	&__actions {
		margin-top: var(--indent-5);
	}
}
</style>
