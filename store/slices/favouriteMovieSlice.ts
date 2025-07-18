import { createSlice } from '@reduxjs/toolkit'
import { FavouriteMovieInitialState } from '../../types'

const initialState:FavouriteMovieInitialState = {
    isFavourited:false,
    favouriteMovies:[]
}

const favouriteMovieSlice = createSlice({
    name:'favouriteMovie',
    initialState,
    reducers:{
        favouriteTrue:(state) => {
            state.isFavourited = true
        },
        favouritFalse:(state) => {
            state.isFavourited = false
        },
        toggleFavouriteState:(state,action) =>{
            state.isFavourited = !state.isFavourited
            if (state.isFavourited) {
                const fullObj = {
                    ...action.payload,
                        isFavourite:true
                }
                state.favouriteMovies.push(fullObj)
            } else {
                state.favouriteMovies = state.favouriteMovies.filter((movie) =>{
                    return movie.title !== action.payload.title
                })
            }
        }
    }
})

export const { toggleFavouriteState, favouriteTrue, favouritFalse } = favouriteMovieSlice.actions
export default favouriteMovieSlice.reducer