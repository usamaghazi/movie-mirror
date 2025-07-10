import styled from 'styled-components/native'
import { fontStyles } from '../../constants/Fonts'
import { CategoryTextTypes, MovieCardTypes } from '../../types'

export const MovieCard = styled.View<MovieCardTypes>(props => ({
    width:props.STORY_WIDTH,
    height:props.STORY_HEIGHT,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
}))

export const MovieImage = styled.Image({
    width: '100%',
    height: '100%',
})

export const GradientOverlay = styled.View({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
})

export const TitleOverlay = styled.View({
    position: 'absolute',  
    bottom: 30,            
    left: 5,              
    right: 0,
})

export const Title = styled.Text({
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    width:'80%'
})

export const Category = styled.View({
    paddingLeft:10,
    paddingRight:10
})

export const CategoryText = styled.Text<CategoryTextTypes>(props => ({
        fontSize: 22,
        fontWeight:'bold',
        fontFamily:fontStyles.pacifico,
        color:props.color,
        marginBottom:15
}))

