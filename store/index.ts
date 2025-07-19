import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'

import favouriteMovieReducer from './slices/favouriteMovieSlice'
import formReducer from './slices/formSlice'
import movieReducer from './slices/movieSlice'
import themeReducer from './slices/themeSlice'

const themePersistConfig = {
  key: 'theme',
  storage: AsyncStorage,
}

const formPersistConfig = {
  key: 'form',
  storage: AsyncStorage,
  
}

const favouriteMoviePersistConfig = {
  key: 'favouriteMovie',
  storage: AsyncStorage,
}

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer)
const persistedFormReducer = persistReducer(formPersistConfig, formReducer)
const persistedFavouriteMovieReducer = persistReducer(favouriteMoviePersistConfig, favouriteMovieReducer)

const rootReducer = combineReducers({
  theme: persistedThemeReducer,
  movie: movieReducer, 
  form: persistedFormReducer,
  favouriteMovie: persistedFavouriteMovieReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store