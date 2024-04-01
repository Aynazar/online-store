export interface ICategory {
	id: string
	title: string
	description: string
	image: string
	userId: string

	createdAt: string
	updatedAt: string
}

export type ICategoryPayload = {
	title: string
	description: string
	brand: string
	image: string
}

export type TUploadImage = {
	url: string
	filename: string
	size: number
}
