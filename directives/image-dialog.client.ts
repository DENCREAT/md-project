import Vue from 'vue';

import { openImageDialog } from '~/utils';

Vue.directive('image-dialog', {
	inserted: (el, binding) => {
		console.log(binding.value);
		el.addEventListener('click', openImageDialog.bind(null, binding.value));
	},
	unbind: (el, binding) => {
		el.removeEventListener('click', openImageDialog.bind(null, binding.value));
	},
});
