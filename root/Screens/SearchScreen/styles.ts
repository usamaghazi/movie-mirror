import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { SearchScreenStyleProps } from '../../../types';

export const SafeArea = styled(SafeAreaView)<SearchScreenStyleProps>(props => ({
        flex:1,
        backgroundColor:props.background,
}))

export const Container = styled.View({
    alignItems:'center',
    paddingTop:15,
    paddingRight:10,
    paddingLeft:10,
})

export const Heading = styled.Text<SearchScreenStyleProps>(props => ({
    marginTop:20,
    alignSelf:'center',
    fontSize:24,
    fontWeight:'bold',
    color:props.textColor
}))

export const InputContainer = styled.View({
    marginTop:10,
    alignItems:'center'
})

export const LoadingContainer = styled.View({
    paddingTop:20
})

export const SearchMoviesContainer = styled.View({
    alignSelf:'center',
})

export const NoMoviesFoundContainer = styled.View({
        flex:1,
        alignItems:'center',
        justifyContent:'center'
})

export const NoMoviesFound = styled.Text<SearchScreenStyleProps>(props => ({
        fontSize:22,
        fontWeight:'bolder',
        fontStyle:'italic',
        color: props.textColor,
        // marginBottom:70
}))

export const RenderFooterContainer = styled.View({
    paddingTop:20,
    paddingBottom:20,
    alignItems:'center',
    // marginBottom:200
})