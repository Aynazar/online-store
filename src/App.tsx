import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.tsx'
import MainPage from './pages/Main'
import useActions from '@/hooks/useActions.ts'
import { useEffect } from 'react'
import { useAppDispatch } from '@/store/store.ts'
import { useAuth } from '@/hooks/useAuth.ts'
import Loading from '@/components/ui/Loading.tsx'
import ProductPage from '@/pages/ProductPage'
import { Role } from '@/api/types/user.interface.ts'
import CategoryPage from '@/pages/Category'

function App() {
	const { isReady, user } = useAuth()
	const dispatch = useAppDispatch()
	const { checkAuth } = useActions()

	useEffect(() => {
		dispatch(checkAuth)
	}, [dispatch])

	if (!isReady) {
		return (
			<>
				<Loading />
			</>
		)
	}

	return (
		<>
			<Layout>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/product/:id' element={<ProductPage />} />

					{user?.roles && user?.roles.includes(Role.ADMIN) ? (
						<Route path='account/create/category' element={<CategoryPage />} />
					) : (
						<Route
							path='account/create/category'
							element={<div>У вас нет доступа</div>}
						/>
					)}
				</Routes>
			</Layout>
		</>
	)
}

export default App
