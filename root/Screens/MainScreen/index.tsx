
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../../components/Header';
import MovieCarousel from '../../../components/MovieCarousel';
import SubCarousel from '../../../components/SubCarousel';
import type { RootState } from '../../../store';
import { useAppDispatch } from '../../../store';
import { fetchingMovies } from '../../../store/slices/movieSlice';
import {
  LoadContainer,
  MovieCarouselContainer,
  RootContainer,
  SafeArea,
  TopRatedMovies,
  TrendingMovies
} from './styles';


const MainScreen = () => {

  const dispatch = useAppDispatch()
  const { colors } = useSelector((state:RootState) => state.theme)
  const { movies, loading , error } = useSelector((state:RootState) => state.movie)

  const popularMovies = movies.popular
  const trendingMovies = movies.trending
  const topRatedMovies = movies.topRated

  const hasMovies = popularMovies.length > 0 ||
                    trendingMovies.length > 0 ||
                    topRatedMovies.length > 0
  const shouldShowLoading = loading || !hasMovies;

  useEffect(()=>{
    dispatch(fetchingMovies())
  },[])
  
  return (
    <SafeArea background={colors.background}>

    <Header/>
    
    {shouldShowLoading ?
    (
      <LoadContainer background={colors.background}>
        <ActivityIndicator color={colors.title} size={'large'}/>
      </LoadContainer>
    ):
    (
      
    <RootContainer
      background={colors.background}>

        <ScrollView>

        <MovieCarouselContainer>
            
        <MovieCarousel
        popularMovies={popularMovies}/>
        </MovieCarouselContainer>
        <TrendingMovies>
        <SubCarousel
        movies={trendingMovies}
        category="Trending Movies"/>
        </TrendingMovies>
        <TopRatedMovies>
        <SubCarousel
        movies={topRatedMovies}
        category="Top Rated Movies"/>
        </TopRatedMovies>
        </ScrollView>
      </RootContainer>
    )
    }
      

    </SafeArea>
  )
}

export default MainScreen


