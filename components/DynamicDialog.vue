<template>
	<div
		class="dialog"
		:class="{
			'dialog--full': mergedProps.full,
			'dialog--no-indents': mergedProps.noIndents,
			...dialogClasses
		}">
		<transition
			name="fade"
			@after-leave="onTransitionLeave">
			<div
				v-show="isOpen"
				class="dialog__overlay"
				@click="close">
				<i
					v-if="mergedProps.closeBtn || mergedProps.closeBtnIcon"
					class="dialog__close-btn"
					:class="[
						{ 'icon-close': !mergedProps.closeBtnIcon },
						mergedProps.closeBtnIcon
					]"
					@click="close()" />
				<div
					class="dialog__container"
					@click.stop>
					<div
						v-if="hasHeader"
						ref="headerContainer"
						class="dialog__header">
						<div ref="headerContent" />
					</div>

					<div
						ref="contentContainer"
						class="dialog__content"
						:style="{ ...dialogStyles }">
						<div ref="content" />
					</div>

					<div
						v-if="hasFooter"
						ref="footerContainer"
						class="dialog__footer">
						<div ref="footerContent" />
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

import { DialogDynamicData, DialogProps } from '~/interfaces';
import { forbidScroll } from '~/utils';

export default (Vue as VueConstructor<Vue & {
	$refs: {
		content: HTMLElement,
		headerContent: HTMLElement,
		footerContent: HTMLElement,
		contentContainer: HTMLElement,
		headerContainer: HTMLElement,
		footerContainer: HTMLElement,
	}
}>).extend({
	name: 'DynamicDialog',
	props: {
		/* eslint-disable vue/no-unused-properties */
		full: {
			type: Boolean,
			default: false,
		},
		closeBtn: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			isOpen: false,
			dialogStyles: {} as Partial<CSSStyleDeclaration>,
			dialogClasses: {} as { [key: string]: boolean },
			hasHeader: false,
			hasFooter: false,
			contentInstance: {} as Vue,
			onClose: (() => {}) as CallableFunction,
			onSubmit: (() => {}) as CallableFunction,
			dialogProps: {} as DialogProps,
			refs: {
				container: 'dynamicContainer',
				header: 'dynamicHeaderContainer',
				footer: 'dynamicFooterContainer',
			},
		};
	},
	computed: {
		mergedProps(): { [key: string]: string | boolean | number } & DialogProps {
			return { ...this.$props, ...this.dialogProps };
		},
	},
	methods: {
		open(data: DialogDynamicData): void {
			if (data.onOpen)
				data.onOpen();

			if (data.onClose)
				this.onClose = data.onClose;

			if (data.onSubmit)
				this.onSubmit = data.onSubmit;

			this.isOpen = true;
			forbidScroll(this.isOpen);

			this.addHeader(data.headerComponent);
			this.addContent(data);
			this.addFooter(data.footerComponent);
		},
		submit(): void {
			this.onSubmit();
		},
		close(): void {
			this.isOpen = false;
			forbidScroll(false);
			// this.clear();
			setTimeout(() => this.clear(), 500);
		},
		addHeader(component: VueConstructor | undefined): void {
			if (component) {
				this.hasHeader = true;

				const HeaderDynamicComponent = Vue.extend(component);
				const instance = new HeaderDynamicComponent();

				this.$nextTick(() => instance.$mount(this.getHeaderContainer()));
			}
		},
		addContent(data: DialogDynamicData): void {
			const DynamicComponent = Vue.extend(data.component);

			this.contentInstance = new DynamicComponent({ propsData: data.props });

			if (data.dialogProps)
				this.dialogProps = data.dialogProps;

			if (data.dialogStyles)
				this.dialogStyles = { ...this.dialogStyles, ...data.dialogStyles };

			if (data.dialogClasses)
				this.dialogClasses = { ...this.dialogClasses, ...data.dialogClasses };

			this.$nextTick(() => this.contentInstance.$mount(this.getContainer()));
		},
		addFooter(component: VueConstructor | undefined): void {
			if (component) {
				this.hasFooter = true;

				const FooterDynamicComponent = Vue.extend(component);
				const instance = new FooterDynamicComponent();

				this.$nextTick(() => instance.$mount(this.getFooterContainer()));
			}
		},
		getContainer(): Element | string {
			this.$refs.content.insertAdjacentHTML('beforeend', `<div ref="${this.refs.container}" />`);

			return this.$refs.contentContainer?.querySelector(`[ref="${this.refs.container}"]`) ?? '';
		},
		getHeaderContainer(): Element | string {
			this.$refs.headerContent.insertAdjacentHTML('beforeend', `<div ref="${this.refs.header}" />`);

			return this.$refs.headerContainer?.querySelector(`[ref="${this.refs.header}"]`) ?? '';
		},
		getFooterContainer(): Element | string {
			this.$refs.footerContent.insertAdjacentHTML('beforeend', `<div ref="${this.refs.footer}" />`);

			return this.$refs.footerContainer?.querySelector(`[ref="${this.refs.footer}"]`) ?? '';
		},
		clear(): void {
			if (this.$refs.content)
				this.$refs.content.innerHTML = '';

			if (this.$refs.headerContent)
				this.$refs.headerContent.innerHTML = '';

			if (this.$refs.footerContent)
				this.$refs.footerContent.innerHTML = '';

			this.dialogProps = {};
			this.dialogClasses = {};
			this.dialogStyles = {};

			this.hasHeader = false;
		},
		onTransitionLeave(): void {
			this.clear();
			this.onClose();
		},
	},
});
</script>

<style lang="scss" scoped>
@import 'assets/styles/mixins/flex';
@import 'assets/styles/mixins/mq';
@import 'assets/styles/mixins/get-layer';

.fade-enter, .fade-leave-to {
	opacity: 0;

	.dialog__container {
		transform: scale(.7);
	}
}

.dialog {
	$root: &;
	$default-width-large-tablet: 800px;
	$default-width-desktop: 840px;

	&__overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		padding: var(--indent-2);
		background-color: rgba(var(--black-color-rgb), .5);
		transition: opacity .3s ease;
		backdrop-filter: blur(var(--overlay-blur));
		z-index: get-layer(dialog);
		transform: translate3d(0, 0, 0);

		@include flex-center;
	}

	&__container {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 100%;
		min-height: 150px;
		max-height: calc(100% - var(--indent-2) * 2);
		background-color: var(--white-color);
		border-radius: var(--default-border-radius);
		transition: all .25s ease;
		box-shadow: 10px 10px 100px rgba(var(--black-color-rgb), .7);

		@include mq(large-tablet) {
			width: auto;
			//width: $default-width-large-tablet;
		}

		@include mq(desktop) {
			//width: $default-width-desktop;
		}
	}

	&__header {
		position: relative;
		padding: var(--indent-2) var(--indent-3);

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: var(--indent-2);
			right: var(--indent-2);
			height: .1rem;
			background-color: rgba(var(--black-color-rgb), .5);
		}
	}

	&__content {
		flex-grow: 1;
		overflow: auto;

		@include mq(sm) {
			border-radius: var(--default-border-radius);
		}
	}

	&__close-btn {
		position: fixed;
		top: var(--indent-3);
		right: var(--indent-3);
		font-size: 34px;
		color: var(--bg-light-color);
		z-index: get-layer(initial);
		cursor: pointer;
	}

	&__actions {
		flex-direction: column;
		width: 100%;

		@include flex-center;

		@include mq(sm) {
			flex-direction: row;
		}
	}

	&__action-button {
		max-width: 25rem;

		&:first-child {
			margin-bottom: var(--base-indent);

			@include mq(sm) {
				margin-bottom: 0;
			}
		}
	}

	&--full {
		#{$root}__overlay {
			padding: 0;
		}

		#{$root}__container {
			height: auto;
			min-height: 100%;
			max-height: 100%;
			border-radius: 0;
		}
	}

	&--no-indents {
		#{$root}__header {
			padding: 0;
		}
	}
}

</style>
