import Vue from 'vue';

if (!Vue.prototype.__slot_utils__) {
	Vue.prototype.__slot_utils__ = true;
	Vue.mixin({
		methods: {
			$hasSlot(name: string) {
				return !!this.$slots[name];
			},
		},
	});
}
