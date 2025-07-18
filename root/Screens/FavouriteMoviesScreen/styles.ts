import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { FavouriteMoviesStyleProps } from '../../../types';

export const SafeAreaContainer = styled(SafeAreaView)<FavouriteMoviesStyleProps>(props => ({
    flex:1,
    backgroundColor:props.background,
    borderTopWidth:1,
    borderTopColor:props.border,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10
}))

export const NoFavouriteMovies = styled.View<FavouriteMoviesStyleProps>(props => ({
    flex:1,
    backgroundColor: props.background,
    alignItems:'center',
    justifyContent:'center'
}))

export const Container = styled.View({
    
    alignItems:'center',
    
})

export const NoFavouriteMoviesText = styled.Text<FavouriteMoviesStyleProps>(props => ({
        fontSize:22,
        fontWeight:'bolder',
        fontStyle:'italic',
        color: props.textColor,
        marginBottom:70
}))