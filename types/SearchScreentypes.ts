export interface SearchScreenStyleProps {
    background?:string
    textColor?:string
}

export interface SearchMovie {
    id?: number
    title: string
    backdrop_path:string
    release_date?:string
    vote_average?: number
    poster_path?: string
    overview? : string
}