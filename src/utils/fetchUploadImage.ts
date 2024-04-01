import { categoryService } from '@/api/services/category/category.service.ts'

export const fetchUploadImage = async (file: File) => {
	const { data } = await categoryService.uploadImage(file)

	return data
}
