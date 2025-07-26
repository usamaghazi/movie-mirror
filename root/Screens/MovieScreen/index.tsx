import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSelector } from 'react-redux';
import BackButton from '../../../components/BackButton';
import Button from '../../../components/Button';
import HeartButton from '../../../components/HeartButton';
import ReviewCard from '../../../components/ReviewCard';
import { CastData } from '../../../constants/Cast';
import type { RootState } from '../../../store';
import { useAppDispatch } from '../../../store';
import { favouriteTrue, favouritFalse, toggleFavouriteState } from '../../../store/slices/favouriteMovieSlice';
import { CastItemTypes } from '../../../types';
import {
  AboutContainer,
  AboutDescription,
  AboutTitle,
  ActorName,
  BackgroundImage,
  BackPosition,
  GradientOverlay,
  GradientOverlayBackDrop,
  HeartPosition,
  InfoContainer,
  MovieInfoContainer,
  NoReviews,
  NoReviewsText,
  PlayButtonContainer,
  PosterImage,
  ReleaseDateText,
  ReviewsContainer,
  ReviewTitle,
  SafeArea,
  StarCast,
  StarsContainer,
  StarsImage,
  TitleText
} from './styles';

const { width: screenWidth } = Dimensions.get('window');



const MovieScreen = () => {
  
  const { selectedMovie } = useSelector((state:RootState) => state.form)
  const { colors } = useSelector((state:RootState) => state.theme)
  const { userReview } = useSelector((state:RootState) => state.form)
  const { favouriteMovies } = useSelector((state:RootState) => state.favouriteMovie)

  const dispatch = useAppDispatch()
  const router = useRouter()
  
  
  const filterReviews = userReview.length > 0 ?  userReview.filter(review =>{
      return review.movieName === selectedMovie?.title
  }): []

  const filterFavouritMovies = favouriteMovies.length > 0 ? 
                                favouriteMovies.filter(movies => {
                                  return movies.title === selectedMovie?.title
                                }): []
  

      useEffect(()=>{
        if(filterFavouritMovies.length > 0 && filterFavouritMovies[0]?.isFavourite){
          dispatch(favouriteTrue())
      }
      else{
        dispatch(favouritFalse())
      }
      },[filterFavouritMovies,dispatch])

   const renderItem = ({ item }: { item: CastItemTypes }) => {
    return (
      <>
      <StarsImage
      source={{uri:item.pic}}
      resizeMode={'cover'}/>
      <GradientOverlay>
        <ActorName>
          {item.name}
        </ActorName>
      </GradientOverlay>
      </>
    );
  };

  return (
    <SafeArea background={colors.background}>
        <ScrollView>
          
          <BackgroundImage
          source={{uri:selectedMovie?.backdrop_path}}
          resizeMode={'cover'}/>

          

          <GradientOverlayBackDrop/>
          <PlayButtonContainer>
              <Ionicons name="play" size={30} color="white" />
            </PlayButtonContainer>

          <AboutContainer>
            <AboutTitle
            aboutTitle={colors.text}>About
            </AboutTitle>
            <AboutDescription
            aboutDescription={colors.textSecondary}>
              {selectedMovie?.overview}
            </AboutDescription>
            <StarCast 
            starsTitle={colors.text}>
              Star Cast
            </StarCast> 
            <Carousel
              width={screenWidth * 0.9}
              height={150}
              data={CastData}
              renderItem={renderItem}
              loop
              autoPlay
              autoPlayInterval={2000}
              scrollAnimationDuration={1000}
              style={{marginTop:10}}
             />
             <ReviewsContainer>
              <ReviewTitle
              reviewTitle={colors.text}>
                Reviews
              </ReviewTitle>

              <Button
               background={colors.title}
               textColor='white'
               iconName='add'
               onPress={()=>{router.push(`/(stack)/${selectedMovie?.title}`)}}
               buttonText='Add Review'/>
             </ReviewsContainer>
             

              {
                filterReviews.length > 0 ? (
                  filterReviews.map((review,index) => (
                    <ReviewCard
                    key={index}
                    userName={review.name}
                    userImage={review.selectedImage}
                    userReview={review.review}
                    stars={review.reviewStars}
                    date={review.date}
                    index={index}/>
                  ))
                ):(
                  <NoReviews>
                    <NoReviewsText
                      nullReview={colors.textDisabled}>
                        No Reviews Yet
                    </NoReviewsText>
                  </NoReviews>
                )
              }
          </AboutContainer>

          <MovieInfoContainer>
              <PosterImage 
              source={{uri:selectedMovie?.poster_path}}/>
              <InfoContainer>
                <TitleText>{selectedMovie?.title}</TitleText>
                <ReleaseDateText>{selectedMovie?.release_date}</ReleaseDateText>
                <StarsContainer>
                  {[1, 2, 3, 4, 5].map(star => (
                  <Ionicons key={star} name="star" size={15} color="#FFD700" />
                  ))}
                </StarsContainer>
                </InfoContainer>
             </MovieInfoContainer>
            
                  

           <HeartPosition onPress={()=>{
            dispatch(toggleFavouriteState(selectedMovie))
           }}>
            {
              filterFavouritMovies.length > 0 ? (
                <HeartButton
                isFavourite={true}/>
              ):(
                <HeartButton
                isFavourite={false}/>
              )
            }
            
           </HeartPosition>

           <BackPosition>
            <BackButton/>
           </BackPosition>

           
          
        </ScrollView>
    </SafeArea>
    
  )
}

export default MovieScreen
