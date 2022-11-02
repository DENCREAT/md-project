export class Page {
	id: string = '';
	link: string = '';
	title: string = '';
	display_page_title: string = '';
	type: string = '';

	constructor() {
	}
}

export interface IPage extends Page {}
