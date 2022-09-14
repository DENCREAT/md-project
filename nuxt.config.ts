import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
	bridge: {
		vite: true,
	},
	head: {
		title: 'Михайловский - юридические услуги',
		htmlAttrs: {
			lang: 'ru',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Meta description' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
	},
	css: [
		'@/assets/styles/main.scss',
	],
	plugins: [
		'~/plugins/breakpoint-observer.plugin.ts',
		'~/plugins/slot-utils.plugin.ts',
		'~/directives/image-dialog.client.ts',
	],
	components: true,
	typescript: {
		strict: true,
	},
	modules: [
		// https://go.nuxtjs.dev/axios
		'nuxt-svg-loader',
		'nuxt-typed-vuex',
		'@pinia/nuxt',
	],
	build: {
		transpile: [
			'/plugins',
		],
	},
});
