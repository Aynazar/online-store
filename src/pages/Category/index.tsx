//@ts-nocheck
import { ChangeEvent, memo, useCallback, useRef, useState } from 'react'
import Button from '@/components/ui/Button.tsx'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import styles from './category.module.scss'
import clsx from '@/utils/clsx.ts'
import { ICategoryPayload } from '@/api/types/category.interface.ts'
import { useAppDispatch } from '@/store/store.ts'
import useActions from '@/hooks/useActions.ts'
import { fetchUploadImage } from '@/utils/fetchUploadImage.ts'
import Snackbar from '@/components/ui/Snackbar.tsx'
import { SnackbarType } from '@/components/ui/types'
import useSnackbar from '@/hooks/useSnackbar.ts'

export interface IImage {
	blobUrl: string
	file: File
}

const CreateCategoryDto = yup.object().shape({
	title: yup.string().min(4).required(),
	description: yup.string().min(6).required(),
	brand: yup.string().required(),
	image: yup.string(),
	//images: yup.mixed().oneOf([yup.array().of(yup.string()), yup.string()]),
})
const CategoryPage = () => {
	const [image, setImage] = useState<IImage>()
	const { set, type, message, isOpen, onClose } = useSnackbar()

	const imgRef = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch()
	const { fetchCategoryAction } = useActions()

	const { register, handleSubmit, reset, formState } = useForm({
		mode: 'onChange',
		resolver: yupResolver(CreateCategoryDto),
	})

	const onClickUploadImage = useCallback(() => {
		if (imgRef.current) imgRef.current.click()
	}, [])

	const removeImage = useCallback((url: string) => {
		setImages(prev => prev.filter(obj => obj.blobUrl !== url))
	}, [])

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement
		const file = target.files?.[0]

		if (file) {
			const fileObj = new Blob([file])

			setImage({
				file,
				blobUrl: URL.createObjectURL(fileObj),
			})
		}
	}

	const onSubmit = async (data: ICategoryPayload): Promise<void> => {
		const result = await fetchUploadImage(image?.file)

		if (!result) {
			set(true, 'Ошибка при создании категории!', SnackbarType.ERROR)
			return
		}

		dispatch(
			fetchCategoryAction({
				title: data.title,
				brand: data.brand,
				description: data.description,
				image: result.url,
			})
		)
		set(true, 'Категория создана успешно!', SnackbarType.SUCCESS)

		setImage()
		reset({
			title: '',
			description: '',
			brand: '',
		})
	}
	return (
		<>
			<div className={styles['category-title']}>Добавить категорию</div>
			<form className={styles['category']} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles['category-content']}>
					<div className={styles['category-cell']}>
						<label className={styles['category-label']}>
							Название
							<input
								autoFocus
								className={styles['category-input']}
								type='text'
								placeholder='Введите название категории'
								{...register('title')}
								name='title'
							/>
						</label>
						<label className={styles['category-label']}>
							Бренд
							<input
								className={styles['category-input']}
								type='text'
								placeholder='Введите название бренда'
								{...register('brand')}
								name='brand'
							/>
						</label>

						<label className={styles['category-label']}>
							Описание
							<textarea
								className={clsx(
									styles['category-input'],
									styles['category-textarea']
								)}
								placeholder='Введите описание продукта'
								{...register('description')}
								name='description'
							/>
						</label>
					</div>
					<div className={styles['category-cell']}>
						{image && (
							<div
								title='Нажмите два раза, чтобы удалить изображение'
								onDoubleClick={() => removeImage(image.blobUrl)}
								key={image.blobUrl}
								className={styles['category-image']}
								style={{ backgroundImage: `url(${image.blobUrl})` }}
							></div>
						)}
					</div>
				</div>

				<div className={styles['category-bottom']}>
					<Button
						type='submit'
						variant='solid'
						size='sm'
						disabled={!formState.isValid || formState.isSubmitting}
					>
						Добавить
					</Button>
					<div
						className={styles['category-upload']}
						title='Загрузить картинку'
						onClick={onClickUploadImage}
					>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M5.80781 6.0667C5.7497 6.00866 5.7036 5.93973 5.67215 5.86385C5.6407 5.78798 5.62451 5.70665 5.62451 5.62452C5.62451 5.54238 5.6407 5.46105 5.67215 5.38518C5.7036 5.3093 5.7497 5.24037 5.80781 5.18233L9.55781 1.43233C9.61586 1.37422 9.68479 1.32812 9.76066 1.29667C9.83654 1.26521 9.91787 1.24902 10 1.24902C10.0821 1.24902 10.1635 1.26521 10.2393 1.29667C10.3152 1.32812 10.3841 1.37422 10.4422 1.43233L14.1922 5.18233C14.3095 5.2996 14.3753 5.45866 14.3753 5.62452C14.3753 5.79037 14.3095 5.94943 14.1922 6.0667C14.0749 6.18398 13.9159 6.24986 13.75 6.24986C13.5841 6.24986 13.4251 6.18398 13.3078 6.0667L10.625 3.38311V9.99952C10.625 10.1653 10.5592 10.3242 10.4419 10.4415C10.3247 10.5587 10.1658 10.6245 10 10.6245C9.83424 10.6245 9.67527 10.5587 9.55806 10.4415C9.44085 10.3242 9.375 10.1653 9.375 9.99952V3.38311L6.69219 6.0667C6.63414 6.12481 6.56521 6.17091 6.48934 6.20236C6.41346 6.23382 6.33213 6.25001 6.25 6.25001C6.16787 6.25001 6.08654 6.23382 6.01066 6.20236C5.93479 6.17091 5.86586 6.12481 5.80781 6.0667ZM18.75 10.6245V15.6245C18.75 15.956 18.6183 16.274 18.3839 16.5084C18.1495 16.7428 17.8315 16.8745 17.5 16.8745H2.5C2.16848 16.8745 1.85054 16.7428 1.61612 16.5084C1.3817 16.274 1.25 15.956 1.25 15.6245V10.6245C1.25 10.293 1.3817 9.97505 1.61612 9.74063C1.85054 9.50621 2.16848 9.37452 2.5 9.37452H7.8125C7.89538 9.37452 7.97487 9.40744 8.03347 9.46604C8.09208 9.52465 8.125 9.60413 8.125 9.68702V9.95733C8.125 11.0081 8.98438 11.894 10.0359 11.8745C10.527 11.8651 10.9947 11.6634 11.3386 11.3128C11.6825 10.9622 11.8751 10.4906 11.875 9.99952V9.68702C11.875 9.60413 11.9079 9.52465 11.9665 9.46604C12.0251 9.40744 12.1046 9.37452 12.1875 9.37452H17.5C17.8315 9.37452 18.1495 9.50621 18.3839 9.74063C18.6183 9.97505 18.75 10.293 18.75 10.6245ZM15.625 13.1245C15.625 12.9391 15.57 12.7578 15.467 12.6037C15.364 12.4495 15.2176 12.3293 15.0463 12.2584C14.875 12.1874 14.6865 12.1689 14.5046 12.205C14.3227 12.2412 14.1557 12.3305 14.0246 12.4616C13.8935 12.5927 13.8042 12.7598 13.768 12.9416C13.7318 13.1235 13.7504 13.312 13.8214 13.4833C13.8923 13.6546 14.0125 13.801 14.1667 13.904C14.3208 14.007 14.5021 14.062 14.6875 14.062C14.9361 14.062 15.1746 13.9632 15.3504 13.7874C15.5262 13.6116 15.625 13.3732 15.625 13.1245Z'
								fill='#344054'
							/>
						</svg>
					</div>
					<input
						multiple
						ref={imgRef}
						type='file'
						accept='image/png, image/jpeg'
						hidden
						name='images'
						onChange={onChange}
					/>
				</div>
			</form>
			<Snackbar
				message={message}
				type={type}
				isOpen={isOpen}
				onClose={onClose}
				timeout={100}
			/>
		</>
	)
}

export default memo(CategoryPage)
