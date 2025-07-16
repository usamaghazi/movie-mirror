import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const { width ,height } = Dimensions.get('window');

interface ReviewFormStylesProps {
    background?:string
    border?:string
    title?:string
}

export const SafeAreaContainer = styled(SafeAreaView)<ReviewFormStylesProps>(props => ({
        flex:1,
        backgroundColor:props.background,
        borderTopWidth:1,
        borderTopColor:props.border,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:20
}))

export const RateStarContainer = styled.View({
    paddingLeft: 7,
    paddingRight:10
})
export const RateTitle = styled.Text<ReviewFormStylesProps>(props => ({
    fontSize:20,
    fontWeight:'bolder',
    color: props.title
}))

export const RateStars = styled.View({
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:10,
    paddingRight:15,
    paddingLeft:15
})

export const NameContainer = styled.View({
    paddingLeft: 7,
    paddingRight:10,
    marginTop:20
})

export const ReviewContainer = styled.View({
    paddingLeft: 7,
    paddingRight:10,
    marginTop:20
})

export const PickImageContainer = styled.View({
    paddingLeft: 7,
    paddingRight:10,
    marginTop:20
})

export const SubmitContainer = styled.View({
    paddingLeft: 7,
    paddingRight:10,
    marginTop:25
})

export const ImageViewer = styled.Image({
    height:height * 0.15,
    width: width * 0.7,
    marginBottom:7
})