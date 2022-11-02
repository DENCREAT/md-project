
export function pickKeys<T>(obj: T, keys) {
	return Object.entries(obj)
		.filter(([key]) => keys.includes(key.toLowerCase()))
		.reduce((obj, [key, val]) => ({ ...obj, ...{ [key.toLowerCase()]: val } }), {});
}

export function tPickKeys<T>(obj: T, ClassType: { new(): T }): T {
	const keysFormType = Object.keys(new ClassType());

	console.log('keys: ', keysFormType);


	return Object.entries(obj)
		.filter(([key]: [keyof T]) => keysFormType.includes(key.toLowerCase()))
		.reduce((obj: T, [key, val]: [string,string]) => ({ ...obj, ...{ [key.toLowerCase()]: val } }), {}) as T;
}

export function pickKeysFromObjectArray(items, keys) {
	return items.map(item => pickKeys(item, keys));
}
