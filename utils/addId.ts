export type WithId<T> = {
	[K in keyof T]: T[K];
} & { id: symbol };

export function addId<T>(obj: T): WithId<T> {
	return {
		id: Symbol('id'),
		...obj,
	};
}
