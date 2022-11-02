import Vue from 'vue';

import { openImageDialog } from '~/utils';

Vue.directive('image-dialog', {
	inserted: (el, binding) => {
		el.addEventListener('click', openImageDialog.bind(null, binding.value));
	},
	unbind: (el, binding) => {
		el.removeEventListener('click', openImageDialog.bind(null, binding.value));
	},
});
