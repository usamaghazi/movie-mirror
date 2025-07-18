import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import MoviePoster from '../../../components/MoviePoster'
import type { RootState } from '../../../store'
import { Container, NoFavouriteMovies, NoFavouriteMoviesText, SafeAreaContainer } from './styles'

const FavouriteMoviesScreen = () => {

  const { colors } = useSelector((state:RootState)=> state.theme)
  const { favouriteMovies } = useSelector((state:RootState) => state.favouriteMovie)

  return (
        <SafeAreaContainer
        edges={['bottom','right','left']}
        background={colors.background}
        border={colors.border}>
          { favouriteMovies.length > 0 ? (
            <Container>
              <FlatList
                data={favouriteMovies}
                renderItem={({item,index}) => (
                  <MoviePoster
                  key={index}
                  item={item}
                  index={index}/>
                )}
                keyExtractor={(_,index)=>index.toString()}
                showsVerticalScrollIndicator={false}/>
            </Container>
          ):(
              <NoFavouriteMovies
                background={colors.background}>
                <NoFavouriteMoviesText
                textColor={colors.textDisabled}>
                  No Favourite Movies
                </NoFavouriteMoviesText>
              </NoFavouriteMovies>
          ) }
        </SafeAreaContainer>
  )
}

export default FavouriteMoviesScreen