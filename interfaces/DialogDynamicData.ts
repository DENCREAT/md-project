import { VueConstructor } from 'vue';

import { DialogProps } from './/DialogProps';

export interface DialogDynamicData {
	component: VueConstructor;
	headerComponent?: VueConstructor;
	footerComponent?: VueConstructor;
	props?: { [key: string]: unknown };
	dialogProps?: DialogProps;
	dialogStyles?: Partial<CSSStyleDeclaration>;
	dialogClasses?: { [key: string]: boolean };
	onOpen?: CallableFunction;
	onClose?: CallableFunction;
	onSubmit?: CallableFunction;
}
