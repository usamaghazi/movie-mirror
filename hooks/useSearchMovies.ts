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
    const [loadingMore, setLoadingMore] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)

    const { colors } = useSelector((state:RootState) => state.theme)

    useEffect(()=>{
        const delayedSearc = setTimeout(()=>{
            if(movieName.trim()===""){
                setSearchResults([])
                setCurrentPage(1)
                setTotalPages(1)
            }
            else{
                searchMovies(movieName, 1)
            }
        },500)

        return () => clearTimeout(delayedSearc)

    },[movieName])

    const searchMovies = async (query:string, page:number, isLoadMore:boolean=false) => {
            if(!query.trim()) return

            if(isLoadMore){
                setLoadingMore(true)
            }else{
                setLoading(true)
                setCurrentPage(1)    
            }
            
            try {
                const response = await fetch(
                    `${SEARCH_BASE_URL}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}&page=${page}`
                )
                if(!response.ok){
                    throw new Error('Something Went Wrong')
                }
                const data = await response.json()
                

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
                if(isLoadMore){
                    setSearchResults(preResults => [...preResults, ...processData])
                }else{
                    setSearchResults(processData)
                }

                setCurrentPage(page)
                setTotalPages(data.total_pages)
            } catch (error) {
                console.log('Search Error', error)
                setSearchResults([])

            } finally {
                setLoading(false)
                setLoadingMore(false)
            }
    }

    const loadMoreMovies = () => {
        if(!loadingMore && currentPage < totalPages && movieName.trim()){
            const nextPage = currentPage + 1
            searchMovies(movieName, nextPage, true)
        }
    }

    return {
        movieName,
        colors,
        searchResults,
        loading,
        loadingMore,
        currentPage,
        totalPages,
        
        setMovieName,
        loadMoreMovies
    }
}