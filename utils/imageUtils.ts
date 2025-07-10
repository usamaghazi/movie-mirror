import { IMAGE_BASE_URL } from '../constants/API'

const sizes = {
    medium: 'w342',
    backdrop: 'w780'
}

const makeImageUrl = (imagePath: string, size: string) => {
    if(!imagePath){
        return null
    }
    const fullUrl = `${IMAGE_BASE_URL}/${size}/${imagePath}`

    return fullUrl
}

export const getPosterImage = (imagePath: string) => {

    return makeImageUrl(imagePath, sizes.medium)
}

export const getBackgroundImage = (imagePath: string) => {
    return makeImageUrl(imagePath, sizes.backdrop)
}