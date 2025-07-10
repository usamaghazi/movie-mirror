export interface Movie {
    id?: number
    title: string
    backdrop_path:string
    release_date?:string
    vote_average?: number
    poster_path?: string
    overview? : string
}

export interface InitialState {
    movies: {
        popular: Movie[],
        trending: Movie[],
        topRated: Movie[]
    }
    loading: boolean
    error: null | Record<string, any> | string,
    selectedMovie?: Movie | null
}