import styled from 'styled-components/native'
import { ItemContainerTypes } from '../../types'

export const ItemContainer = styled.TouchableOpacity<ItemContainerTypes>(props => ({
    alignItems: 'center',
    width: props.ITEM_WIDTH
}))

export const TitleOverlay = styled.View({
     position: 'absolute',  
    bottom: 30,            
    left: 10,              
    right: 0
})

export const Poster = styled.Image({
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
})

export const Title = styled.Text({
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    width:'70%'
}) 