import { configureStore } from '@reduxjs/toolkit'
import { rootReducers } from '@/store/rootReducers.ts'
import { useDispatch } from 'react-redux'
import { thunk } from 'redux-thunk'

export const store = configureStore({
	reducer: rootReducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: true,
		}).concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type dispatch = typeof store.dispatch

type DispatchFunction = () => dispatch

export const useAppDispatch: DispatchFunction = useDispatch
