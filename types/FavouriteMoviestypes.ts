export interface FavouriteMoviesStyleProps {
    background?:string
    textColor?:string
    border?:string
}

export interface FavouriteMoviesStatetypes {
    id?: number
    title: string
    backdrop_path:string
    release_date?:string
    vote_average?: number
    poster_path?: string
    overview? : string
    isFavourite?:boolean
}

export interface FavouriteMovieInitialState{
    isFavourited:boolean
    favouriteMovies: FavouriteMoviesStatetypes[]
}