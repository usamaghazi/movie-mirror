import Input from '@/components/Input'
import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, Text, TouchableOpacity } from 'react-native'

import Header from '../../../components/Header'
// import MoviePoster from '../../../components/MoviePoster'
import { useSearchMovies } from '../../../hooks/useSearchMovies'
import { Container, Heading, InputContainer, LoadingContainer, SafeArea } from './styles'

const { width } = Dimensions.get('window')

const SearchScreen = () => {
    
    const { colors,
            movieName,
            loading,
            searchResults,
            setMovieName } = useSearchMovies()

    // const hasMovies = searchResults.length > 0
    // const shouldShowLoading = loading || !hasMovies

  return (
        <SafeArea 
        background={colors.background}
        edges={['right','left']}>

            <Header/>

        <Container>
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
                // <SearchMoviesContainer>
                <FlatList
                style={{marginBottom:180}}
                data={searchResults}
                renderItem={({item,index}) => (
                //   <MoviePoster
                //   key={index}
                //   item={item}
                //   index={index}/>
                <TouchableOpacity
                style={{margin:8}}
                key={index}
                onPress={()=>{console.log('pRESSSSSSSSS')}}>
                    <Text>
                        {item.title}
                    </Text>
                </TouchableOpacity>
                )}
                keyExtractor={(_,index)=>index.toString()}
                showsVerticalScrollIndicator={false}/>
                // </SearchMoviesContainer>
            ): null}
        </Container>

        </SafeArea>
  )
}

export default SearchScreen