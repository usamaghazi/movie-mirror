import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('window')

export const PosterCardContainer = styled.TouchableOpacity({
    margin:7,
})

export const PosterCard = styled.View({
    width: width * 0.7, 
    height: width * 0.8,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
})

export const PosterImage = styled.Image({
    width:'100%',
    height:'100%'
})

export const Overlay = styled.View({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 12,
    paddingVertical: 10,   
})

export const OverlayContent = styled.View({
    flex: 1,
})

export const Title = styled.Text({
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
})

export const InfoRow = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const Year = styled.Text({
    color: '#cccccc',
    fontSize: 12,
})

export const RatingContainer = styled.View({
    flexDirection: 'row',
    alignItems: 'center',
})

export const Star = styled.Text({
    color: '#FFD700',
    fontSize: 12,
    marginRight: 4,
})

export const Rating = styled.Text({
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
})