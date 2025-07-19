import Constant from 'expo-constants'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SEARCH_BASE_URL } from '../constants/API'
import type { RootState } from '../store'
import { SearchMovie } from '../types'
import { getBackgroundImage, getPosterImage } from '../utils'

// import { useAppDispatch } from '../store'
const api_key = Constant.expoConfig?.extra?.TMDB_API_KEY

export const useSearchMovies = () => {
    const [movieName, setMovieName] = useState<string>('')
    const [searchResults, setSearchResults] = useState<SearchMovie[]|[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const { colors } = useSelector((state:RootState) => state.theme)

    useEffect(()=>{
        const delayedSearc = setTimeout(()=>{
            if(movieName.trim()===""){
                setSearchResults([])
            }
            else{
                searchMovies(movieName)
            }
        },500)

        return () => clearTimeout(delayedSearc)

    },[movieName])

    const searchMovies = async (query:string) => {
            if(!query.trim()) return
            setLoading(true)
            try {
                const response = await fetch(
                    `${SEARCH_BASE_URL}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`
                )
                if(!response.ok){
                    throw new Error('Something Went Wrong')
                }
                const data = await response.json()
                console.log('Moviesss', data.results)

                const processMovies = (movies:any) => {
                   return movies.map((movie:any) =>{
                        const posterUrl = getPosterImage(movie.poster_path)
                        const backdropUrl = getBackgroundImage(movie.backdrop_path)
                        return{
                            ...movie,
                            backdrop_path:backdropUrl,
                            poster_path:posterUrl
                        }
                    })
                }
                const processData = processMovies(data.results)
                setSearchResults(processData)
            } catch (error) {
                console.log('Search Error', error)
                setSearchResults([])

            } finally {
                setLoading(false)
            }
    }

    return {
        movieName,
        colors,
        searchResults,
        loading,
        
        setMovieName
    }
}