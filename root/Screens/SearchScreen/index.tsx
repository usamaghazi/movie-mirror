import Input from '@/components/Input'
import React from 'react'
import { ActivityIndicator, Dimensions, FlatList } from 'react-native'

import Header from '../../../components/Header'
// import MoviePoster from '../../../components/MoviePoster'
import MoviePoster from '@/components/MoviePoster'
import { useSearchMovies } from '../../../hooks/useSearchMovies'
import { Heading, InputContainer, LoadingContainer, NoMoviesFound, NoMoviesFoundContainer, RenderFooterContainer, SafeArea, SearchMoviesContainer } from './styles'

const { width } = Dimensions.get('window')

const SearchScreen = () => {
    
    const { colors,
            movieName,
            loading,
            searchResults,
            loadingMore,
            loadMoreMovies,
            setMovieName } = useSearchMovies()
  
      const renderFooter = () => {
        if(!loadingMore) return null

        return (
            <RenderFooterContainer>
                <ActivityIndicator color={colors.title} size={'large'}/>
            </RenderFooterContainer>
        )
      }

      const handleEndReached = () => {
            loadMoreMovies()
        }

  return (
        <SafeArea 
        background={colors.background}
        edges={['right','left']}>

            <Header/>

        <>
            <Heading 
            textColor={colors.text}>
                What you like to Watch
            </Heading>
            <InputContainer>
            <Input
            placeholder='Search for Movies..'
            onChangeText={text => setMovieName(text)}
            value={movieName}
            height={50}
            width={width * 0.85}/>
            </InputContainer>
            {loading ? (
                <LoadingContainer>
                    <ActivityIndicator color={colors.title} size={'large'}/>
                </LoadingContainer>
            ): searchResults.length > 0 ?(
                <SearchMoviesContainer>
                <FlatList
                style={{marginBottom:200}}
                keyboardShouldPersistTaps="handled"
                data={searchResults}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                renderItem={({item,index}) => (
                  <MoviePoster
                  key={index}
                  item={item}
                  index={index}/>
                )}
                keyExtractor={(_,index)=>index.toString()}
                showsVerticalScrollIndicator={false}/>
                
                 </SearchMoviesContainer>
            ): movieName.trim() ? (
                    <NoMoviesFoundContainer>
                        <NoMoviesFound
                        textColor={colors.text}>
                            No movies found for "{movieName}"
                        </NoMoviesFound>
                    </NoMoviesFoundContainer>
                ) : null}
        </>

        </SafeArea>
  )
}

export default SearchScreen