//@ts-nocheck
import { FC, memo, useCallback, useEffect, useState } from 'react'
import Inner from '@/components/main/Inner'

import styles from './Main.module.scss'
import Product from '@/components/main/Product'
import Slider from '@/components/ui/Slider.tsx'
import Receipts from '@/components/main/Receipts'
import AboutIt from '@/components/main/AboutIt'
import clsx from '@/utils/clsx.ts'
import { useQuery } from '@tanstack/react-query'
import { productService } from '@/api/services/products/product.service.ts'
import { IProduct } from '@/api/types/product.interface.ts'
import { useAppDispatch } from '@/store/store.ts'
import useActions from '@/hooks/useActions.ts'
import { useTypedSelector } from '@/hooks/useTypedSelector.ts'

const navigation = [
	{
		id: new Date(),
		title: 'Все',
	},
	{
		id: new Date(),
		title: 'Телефоны',
	},
	{
		id: new Date(),
		title: 'Планшеты',
	},
	{
		id: new Date(),
		title: 'Дроны',
	},
	{
		id: new Date(),
		title: 'Игрушки',
	},
]

const Main: FC = () => {
	const [active, setActive] = useState<number>(0)
	const dispatch = useAppDispatch()
	const { GetAllCategoryAction } = useActions()
	const categoryData = useTypedSelector(state => state.category?.data)

	const { data } = useQuery({
		queryKey: ['product'],
		queryFn: productService.getAllProducts,
	})

	const handleClickNav = useCallback((index: number) => {
		setActive(index)
	}, [])

	useEffect(() => {
		dispatch(GetAllCategoryAction)
	}, [dispatch])

	if (!categoryData) return null

	return (
		<>
			<Inner />
			<div className={styles['Main-products']}>
				<div className={styles['Main-title']}>Новые поступления</div>
				<ul className={styles['Main-sort']}>
					{navigation &&
						navigation.map((nav, index) => (
							<li
								className={clsx(
									styles['Main-sort-link'],
									index === active && styles['Main-sort-link-active']
								)}
								aria-label={nav.title}
								tabIndex={index}
								onClick={() => handleClickNav(index)}
							>
								{nav.title}
							</li>
						))}
				</ul>
			</div>
			<div className={styles['Main-products-item']}>
				<Slider>
					{data?.data.map((obj: IProduct) => <Product {...obj} key={obj.id} />)}
				</Slider>
			</div>

			<div className={styles['Main-receipts']}>
				<Receipts receipts={categoryData} />
			</div>

			<div className={styles['Main-catalog']}>
				<div className={styles['Main-title']}>Каталог товаров</div>
				<div className={styles['Main-catalog-item']}>
					{data?.data.map((obj: IProduct) => <Product {...obj} key={obj.id} />)}
				</div>
			</div>

			<div className={styles['Main-about']}>
				<div className={styles['Main-title']} style={{ paddingBottom: '50px' }}>
					О “Гаджетариуме” в цифрах
				</div>
				<AboutIt />
			</div>
		</>
	)
}

export default memo(Main)
