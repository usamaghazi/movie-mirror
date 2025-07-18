

export interface MoviePosterTypes {
    item:{
            id?: number
            title: string
            backdrop_path:string
            release_date?:string
            vote_average?: number
            poster_path?: string
            overview? : string
            isFavourite?:boolean
        }
        index:number
}