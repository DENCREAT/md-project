import DialogImage from '~/components/dialog/DialogImage.vue';
import { dialogDynamicService } from '~/services/dialog-dynamic-service';

export function openImageDialog(url: string) {
	dialogDynamicService.open({
		component: DialogImage,
		props: { url },
	});
}
