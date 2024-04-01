import { memo, useCallback } from 'react'

import type { FC } from 'react'

import styles from './Receipts.module.scss'
import { useNavigate } from 'react-router-dom'
import { ICategory } from '@/api/types/category.interface.ts'
import { translit } from '@/utils/translit.ts'

interface OwnProps {
	receipts: ICategory[] | undefined
}

const Receipts: FC<OwnProps> = ({ receipts }) => {
	const navigate = useNavigate()

	const onLink = useCallback((collection: string) => {
		const ruToEn = translit(collection).replace(/ /g, '-')
		navigate(`/category/${ruToEn}`)
	}, [])

	return (
		<>
			{receipts && receipts.length ? (
				<div className={styles['receipts']}>
					<div
						aria-label={receipts[0]?.title}
						className={styles['receipts-item']}
						onClick={() => onLink(receipts[0]?.title)}
					>
						<img
							className={styles['receipts-preview']}
							src={receipts[0]?.image}
							alt={receipts[0]?.title}
							srcSet={receipts[0]?.image}
							about={receipts[0]?.description}
						/>
						<div
							className={styles['receipts-info']}
							style={{ padding: '17.8rem 13.1rem 13.1rem 7.3rem' }}
						>
							<div className={styles['receipts-title']}>
								{receipts[0]?.title}
							</div>
							<div className={styles['receipts-description']}>
								{receipts[0]?.description}
							</div>
						</div>
					</div>
					<div
						aria-label={receipts[1]?.title}
						className={styles['receipts-item']}
						onClick={() => onLink(receipts[1]?.title)}
					>
						<img
							className={styles['receipts-preview']}
							src={receipts[1]?.image}
							alt={receipts[1]?.title}
							srcSet={receipts[1]?.image}
							about={receipts[1]?.description}
						/>
						<div className={styles['receipts-info']}>
							<div className={styles['receipts-title']}>
								{receipts[1]?.title}
							</div>
							<div className={styles['receipts-description']}>
								{receipts[1]?.description}
							</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	)
}

export default memo(Receipts)
