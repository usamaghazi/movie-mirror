import Constant from 'expo-constants'
import { useCallback, useState } from 'react'
import { BASE_URL, TOP_RATED_URL, TRENDING_URL } from '../constants/API'
import { Movie } from '../types'
import { getBackgroundImage, getPosterImage } from '../utils'

const api_key = Constant.expoConfig?.extra?.TMDB_API_KEY

export const useMovie = () => {
    const [popular, setPopular] = useState<Movie[]>([])
    const [trending, setTrending] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<null | Record<string, any> | string>(null)
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

    const fetchingMovies = useCallback(async () => {
        setLoading(true)
        setError(null)
        
        try {
            const [populerResponse, trendingResponse, topRatedResponse] = await Promise.all([
                fetch(`${BASE_URL}?api_key=${api_key}`),
                fetch(`${TRENDING_URL}?api_key=${api_key}`),
                fetch(`${TOP_RATED_URL}?api_key=${api_key}`)
            ])

            if (!populerResponse.ok || !trendingResponse.ok || !topRatedResponse.ok) {
                throw new Error('Something Went Wrong')
            }

            const [popularData, trendingData, topRatedData] = [
                await populerResponse.json(),
                await trendingResponse.json(),
                await topRatedResponse.json()
            ]

            const processMovies = (movies: any) => {
                return movies.map((movie: any) => {
                    const posterUrl = getPosterImage(movie.poster_path)
                    const backgroundUrl = getBackgroundImage(movie.backdrop_path)
                    return {
                        ...movie,
                        backdrop_path: backgroundUrl,
                        poster_path: posterUrl
                    }
                })
            }

            // Set each category separately
            setPopular(processMovies(popularData.results))
            setTrending(processMovies(trendingData.results))
            setTopRated(processMovies(topRatedData.results))
            setLoading(false)

        } catch (error) {
            setPopular([])
            setTrending([])
            setTopRated([])
            setLoading(false)
            setError(error instanceof Error ? error.message : 'Unknown error')
        }
    }, [])

    return {
        popular,
        trending,
        topRated,
        loading,
        error,
        selectedMovie,
        setPopular,
        setTrending,
        setTopRated,
        setSelectedMovie,
        fetchingMovies
    }
}