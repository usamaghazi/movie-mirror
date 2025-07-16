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

}