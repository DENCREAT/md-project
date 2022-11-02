import { Pinia, PiniaPluginContext } from 'pinia';

import { defineNuxtPlugin } from '~/.nuxt/imports';

function MyPiniaPlugin(ctx: PiniaPluginContext) {
	ctx.store.$axios = (ctx.app as any).context.$axios;
}

export default defineNuxtPlugin(({ $pinia }: { $pinia: Pinia } ) => {
	$pinia.use(MyPiniaPlugin);
});
