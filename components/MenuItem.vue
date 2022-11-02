<template>
	<div
		:class="`menu-item--level--${level}`"
		class="menu-item">
		<NuxtLink
			:to="data.url"
			class="menu-item__link"
			@click.native.capture="toggle($event, !!data.children)">
			{{ data.title }}

			<MenuArrowIcon
				v-if="data.children"
				:expanded="isExpanded"
				:theme="level === 1 ? MenuArrowIconColor.WHITE : MenuArrowIconColor.BLUE"
				class="menu-item__arrow" />
		</NuxtLink>

		<transition
			v-if="data.children"
			name="slide">
			<div
				v-if="isExpanded"
				class="menu-item__submenu">
				<MenuItem
					v-for="child in data.children"
					:key="child.id"
					:level="level + 1"
					:data="child" />
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import MenuArrowIcon from '~/components/MenuArrowIcon.vue';
import { MenuArrowIconColor } from '~/enums';
import { NavigationItem } from '~/interfaces';

export default Vue.extend({
	name: 'MenuItem',
	components: { MenuArrowIcon },
	props: {
		data: {
			type: Object as PropType<NavigationItem>,
			required: true,
			default: () => ({}),
		},
		active: Boolean,
		level: {
			type: Number,
			default: 1,
		},
	},
	data() {
		return {
			MenuArrowIconColor,
			isLocalActive: this.active,
		};
	},
	computed: {
		isExpanded(): boolean {
			return this.isLocalActive;
		},
	},
	methods: {
		toggle(e: MouseEvent, hasChildren: boolean): void {
			if (hasChildren) e.preventDefault();

			this.isLocalActive = !this.isLocalActive;
		},
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/flex";
@import "assets/styles/mixins/font";
@import "assets/styles/mixins/size";

.slide-enter-active,
.slide-leave-active {
	transition: all .5s cubic-bezier(.44,.24,0,.98);
}

.slide-enter-to, .slide-leave {
	max-height: 300px;
	overflow: hidden;
}

.slide-enter, .slide-leave-to {
	overflow: hidden;
	max-height: 0;
}

.menu-item {
	$root: &;
	width: 100%;

	&__link {
		padding: 14px var(--indent-2);
		width: 100%;
		justify-content: space-between;

		@include flex-v-center;
	}

	&--level--1 {
		& > #{$root}__link {
			text-transform: uppercase;

			@include font(18, bold);
		}

		& > #{$root}__submenu {
			background-color: #525C81;
		}
	}

	&--level--2 {
		& > #{$root}__link {
			@include font(16, bold);
		}

		& > #{$root}__submenu {
			background-color: var(--secondary-color);
		}
	}

	&--level--3 {
		& > #{$root}__link {
			justify-content: flex-start;

			@include font(14, bold);
			@include flex-v-center;

			&::before {
				content: '';
				border: 1px solid;
				border-radius: 50%;
				margin-right: var(--base-indent);

				@include size(0);
			}
		}
	}
}
</style>
