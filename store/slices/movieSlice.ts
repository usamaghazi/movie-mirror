import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Constant from 'expo-constants'
import { BASE_URL, TOP_RATED_URL, TRENDING_URL } from '../../constants/API'
import { InitialState } from '../../types'
import { getBackgroundImage, getPosterImage } from '../../utils'

const api_key  = Constant.expoConfig?.extra?.TMDB_API_KEY

export const fetchingMovies = createAsyncThunk(
                    'movies/fetchMovies', async(_,{ rejectWithValue }) =>{
                        try {
                            
                            const [ populerResponse,
                                    trendingResponse,
                                    topRatedResponse
                             ] = await Promise.all([
                                fetch(`${BASE_URL}?api_key=${api_key}`),
                                fetch(`${TRENDING_URL}?api_key=${api_key}`),
                                fetch(`${TOP_RATED_URL}?api_key=${api_key}`)
                             ])

                             if(!populerResponse.ok || 
                                !trendingResponse.ok ||
                                !topRatedResponse.ok){
                                    throw new Error('Something Went Wrong')
                                }

                              const [popularData, trendingData, topRatedData ] = [
                                await populerResponse.json(),
                                await trendingResponse.json(),
                                await topRatedResponse.json()
                              ]  

                              const processMovies = (movies:any) => {
                                return movies.map((movie:any) =>{
                                    const posterUrl = getPosterImage(movie.poster_path)
                                    const backgroundUrl = getBackgroundImage(movie.backdrop_path)
                                    // console.log('link',backgroundUrl)
                                    return {
                                        ...movie,
                                        backdrop_path: backgroundUrl,
                                        poster_path: posterUrl
                                    }
                                })
                              }

                              const processedData = {
                                popular: processMovies(popularData.results),
                                trending: processMovies(trendingData.results),
                                topRated:processMovies(topRatedData.results)
                              }

                              return processedData
                        //  const response = await fetch(`${BASE_URL}?api_key=${api_key}`)

                        //  if(!response.ok){
                        //     throw new Error('Something Went Wrong')
                        //  }
                         
                        //  const data = await response.json()
                        
                         
                        //  const moviesWithImages = data.results.map((movies:any) => {
                        //     const posterUrl = getPosterImage(movies.poster_path)
                        //     const backgroundUrl =getBackgroundImage(movies.backdrop_path)
                        //     return {
                        //         ...movies,
                        //         backdrop_path: backgroundUrl,
                        //         poster_path: posterUrl
                        //     }
                        //  })
                         
                        //  return moviesWithImages

                        } catch (error) {
                            return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
                        } 
                    } 
)


const initialState: InitialState = {
    movies:{
        popular: [],
        trending:[],
        topRated:[]
    },
    loading: false,
    error: null,
    selectedMovie:null
}

const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        setSelectedMovie: (state, action) => {
                state.selectedMovie = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchingMovies.pending, (state)=>{
                state.loading = true,
                state.error = null
            })
            .addCase(fetchingMovies.fulfilled, (state, action)=>{
                state.movies = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchingMovies.rejected, (state, action)=>{
                state.movies = {
                    popular: [],
                    trending: [],
                    topRated: []
                }
                state.loading = false
                state.error = action.error
            })
    }
})


export const { setSelectedMovie } = movieSlice.actions
export default movieSlice.reducer


