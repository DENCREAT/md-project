export function forbidScroll(flag: boolean) {
	document.body.classList[flag ? 'add' : 'remove']('hide-overflow');
}
