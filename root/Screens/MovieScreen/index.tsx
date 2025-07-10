import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSelector } from 'react-redux';
import BackButton from '../../../components/BackButton';
import HeartButton from '../../../components/HeartButton';
import { CastData } from '../../../constants/Cast';
import type { RootState } from '../../../store';
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
  PlayButtonContainer,
  PosterImage,
  ReleaseDateText,
  ReviewButtonContainer,
  ReviewButtonText,
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
  
  const { selectedMovie } = useSelector((state:RootState) => state.movie)
  const { colors } = useSelector((state:RootState) => state.theme)

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
              <ReviewButtonContainer>
                <Ionicons name='add' size={10} color='white'/>
                <ReviewButtonText>
                  Add Review
                </ReviewButtonText>
              </ReviewButtonContainer>
             </ReviewsContainer>
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
            
           

           <HeartPosition>
            <HeartButton/>
           </HeartPosition>

           <BackPosition>
            <BackButton/>
           </BackPosition>

           
          
        </ScrollView>
    </SafeArea>
    
  )
}

export default MovieScreen
