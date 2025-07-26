export interface Movie {
    id?: number
    title: string
    backdrop_path:string
    release_date?:string
    vote_average?: number
    poster_path?: string
    overview? : string
    isFavourite?:boolean
}

export interface UserReview{
    movieName:string
    name:string
    review:string
    selectedImage:string
    reviewStars:string[]
    date: string
}

export interface ReviewFormTypes {
    stars: string[]
    userReview: UserReview[]
    selectedMovie?: Movie | null

}