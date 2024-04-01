import instance from '@/api/core/instance.ts'
import { ICategory, ICategoryPayload, TUploadImage } from '@/api/types/category.interface.ts'

export const categoryService = {
	async getCategory(id: string) {
		const { data } = await instance.get(`/category/${id}`)

		return data
	},

	async getAllCategory(): Promise<ICategory> {
		const { data } = await instance.get<ICategory>('/category/all')

		return data
	},

	async uploadImage(file: File) {
		let formData = new FormData()
		formData.append('image', file)
		const data = await instance.post<TUploadImage>('/category/upload-image', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		return data
	},

	async createCategory(payload: ICategoryPayload): Promise<ICategoryPayload> {
		const { data } = await instance.post('/category', {
			title: payload.title,
			description: payload.description,
			brand: payload.brand,
			image: payload.image,
		})

		console.log(data)

		return data
	},
}
