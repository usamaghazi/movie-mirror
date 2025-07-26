import { useRouter } from 'expo-router'
import React from 'react'
import { useAppDispatch } from '../../store'
import { setSelectedMovie } from '../../store/slices/formSlice'
import { MoviePosterTypes } from '../../types'
import { InfoRow, Overlay, OverlayContent, PosterCard, PosterCardContainer, PosterImage, Rating, RatingContainer, Star, Title, Year } from './styles'

const MoviePoster:React.FC<MoviePosterTypes> = ({
    item,
    index
}) => {
    console.log('Movie Poster open...')
    const dispatch = useAppDispatch();
    const router = useRouter()
  return (
    <PosterCardContainer 
    activeOpacity={0.6}
    onPress={()=>{
        console.log('Pressssssssed')
        dispatch(setSelectedMovie(item))
        router.push('/(tabs)/Home/[movie]')
    }}>
        <PosterCard>
            <PosterImage source={{uri:item.backdrop_path}}/>
            <Overlay>
                <OverlayContent>
                    <Title>{item.title}</Title>
                    <InfoRow>
                        <Year>{item.release_date}</Year>
                        <RatingContainer>
                            <Star>★</Star>
                            <Rating>{item.vote_average}</Rating>
                        </RatingContainer>
                    </InfoRow>
                </OverlayContent>
            </Overlay>
        </PosterCard>
    </PosterCardContainer>
  )
}

export default MoviePoster