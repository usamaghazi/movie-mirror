import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import formReducer from './slices/formSlice'
import movieReducer from './slices/movieSlice'
import themeReducer from './slices/themeSlice'

const store = configureStore({
    reducer:{
        theme: themeReducer,
        movie: movieReducer,
        form: formReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store