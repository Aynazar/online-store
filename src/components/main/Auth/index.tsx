import { useState } from 'react'

import styles from './auth.module.scss'
import SignInComponent from '@/components/main/Auth/SignInComponent.tsx'
import SignUpComponent from '@/components/main/Auth/SignUpComponent.tsx'

const AuthPopup = () => {
	const [auth, setAuth] = useState<'login' | 'register'>('login')

	return (
		<>
			<div className={styles['auth-title']}>
				{auth === 'login' ? 'Войти' : 'Зарегистрироваться'}
			</div>
			{auth === 'login' ? (
				<SignInComponent onClick={() => setAuth('register')} />
			) : (
				<SignUpComponent onClick={() => setAuth('login')} />
			)}
		</>
	)
}

export default AuthPopup
