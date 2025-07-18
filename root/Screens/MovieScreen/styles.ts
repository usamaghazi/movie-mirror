import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const { height: screenHeight } = Dimensions.get('window');

interface MovieStyleProps {
  background?: string;
  aboutTitle?:string
  aboutDescription?:string
  starsTitle?:string
  reviewTitle?:string,
  nullReview?:string
}


export const SafeArea = styled(SafeAreaView)<MovieStyleProps>(props=>({
    flex: 1,
    paddingBottom:-50,

    ...(props.background && {
        backgroundColor: props.background
        })
    
}))


export const BackgroundImage = styled.ImageBackground({
    height: screenHeight * 0.35,
    width:'100%',
})

export const GradientOverlayBackDrop = styled.View({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: screenHeight * 0.35,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
})

export const HeartPosition = styled.TouchableOpacity({
    position: 'absolute', 
    top: 18, 
    right: 18, 
    zIndex: 10
})

export const BackPosition = styled.View({
   position: 'absolute', 
   top: 18, 
   left: 18, 
   zIndex: 10
})

export const AboutContainer = styled.View({
  marginTop:80,
  paddingLeft:15,
  paddingRight:15,
  marginBottom:15
  
})

export const AboutTitle = styled.Text<MovieStyleProps>(props =>({
    fontSize:26,
    fontWeight:'bolder',
    color: props.aboutTitle
}))

export const AboutDescription = styled.Text<MovieStyleProps>(props =>({
    fontSize:16,
    fontWeight:'bold',
    color: props.aboutDescription,
    marginTop:5,
    width:'90%'
}))

export const StarCast = styled.Text<MovieStyleProps>(props => ({
    fontSize:26,
    fontWeight:'bolder',
    color: props.starsTitle,
    marginTop: 15
}))

export const StarsImage = styled.Image({
    flex:1,
    borderRadius: 10,
    marginLeft:5,
    marginRigh:5
})

export const GradientOverlay = styled.View({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:5,
    marginRigh:5,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
})

export const ActorName = styled.Text({
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
})

export const MovieInfoContainer = styled.View({
    // paddingRight:15,
    // paddingLeft:15,
    flexDirection:'row',
    position:'absolute',
    top:120,
    left:20
})

export const PosterImage = styled.Image({
    height:170,
    width:120,
    borderRadius:5
})

export const StarsContainer = styled.View({
  flexDirection: 'row',
  marginTop:10
})

export const PlayButtonContainer = styled.TouchableOpacity({
    backgroundColor:'red',
    height:60,
    width:60,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:10,
    marginLeft:0,
    position:'absolute',
    top:190,
    right:10
})

export const InfoContainer = styled.View({
    // alignSelf:'center',
    marginLeft:5,
    marginTop:10
})

export const TitleText = styled.Text({
    fontSize:22,
    fontWeight:'bold',
    color:'white',
    width:'98%',
    // backgroundColor:'yellow'
})

export const ReleaseDateText = styled.Text({
    fontSize:18,
    fontWeight:'bolder',
    color:'white'
})

export const ReviewsContainer = styled.View({
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop: 20,
    // backgroundColor:'yellow'
})

export const ReviewTitle = styled.Text<MovieStyleProps>(props => ({
    fontSize:26,
    fontWeight:'bolder',
    color:props.reviewTitle
}))

// export const ReviewButtonContainer = styled.TouchableOpacity({
//     padding:10,
//     alignItems:'center',
//     backgroundColor:'#c60030',
//     flexDirection:'row',
//     justifyContent:'center',
//     borderRadius:20
// })

// export const ReviewButtonText = styled.Text({
//     fontSize:14,
//     fontWeight:'400',
//     color:'white'
// })

export const NoReviews = styled.View({
    padding:20,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
    // backgroundColor:'yellow'
})

export const NoReviewsText = styled.Text<MovieStyleProps>(props=> ({
        fontSize:24,
        fontWeight:'bold',
        fontStyle:'italic',
        color:props.nullReview
}))