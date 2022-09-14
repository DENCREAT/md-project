import { DialogDynamicData } from '~/interfaces';
import { DialogInstance } from '~/types';

export const dialogDynamicService = {
	ref: {} as DialogInstance,
	init(ref: DialogInstance): void {
		this.ref = ref;
	},
	open(data: DialogDynamicData): void {
		console.log(this.ref);
		this.ref.isOpen && this.close();

		this.ref.open(data);
	},
	submit(): void {
		this.ref.submit();
	},
	close(): void {
		this.ref.close();
	},
};
