import styled from 'styled-components/native';

interface RootContainerProps {
  background?: string;
}
interface TextProps {
  textColor?: string
}
interface LoadContainer {
  background?: string
}


export const SafeArea = styled.SafeAreaView<RootContainerProps>(props => ({
        flex:1,
      ...(props.background && {
        backgroundColor: props.background
        })
}))

export const RootContainer = styled.View<RootContainerProps>(props => ({
    flex:1,
    
    ...(props.background && {
        backgroundColor: props.background
    })
}))

export const LoadContainer = styled.View<LoadContainer>(props =>({
    flex:1,
    justifyContent:'center',
    alignItems:'center',

    ...(props.background && {
      backgroundColor:props.background
    })
}))

export const Item = styled.Text<TextProps>(props => ({
      fontSize:24,
      fontWeight:'bold',

      ...(props.textColor && {
        color: props.textColor
      })
}))

export const MovieCarouselContainer = styled.View({
    paddingTop:20,
    paddingBottom:10,
})

export const TrendingMovies = styled.View({
    marginTop:10,
})

export const TopRatedMovies = styled.View({
    marginTop:10,
    marginBottom:10
})