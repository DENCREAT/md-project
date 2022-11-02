import { useNavigationStore } from '~/store/navigation';
import { usePageStore } from '~/store/page';

export default async({ route, $pinia }) => {
	const navigationStore = useNavigationStore($pinia);

	if (process.server)
		await navigationStore.nuxtServerInit();


	const pageStore = usePageStore($pinia);
	const navNode = navigationStore.navigation.find(nav => nav.url.toLowerCase() === route.path.toLowerCase());

	if (navNode)
		await pageStore.loadPage(navNode.object_id, navNode.object);
};
