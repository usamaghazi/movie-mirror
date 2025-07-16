import styled from 'styled-components/native'
import { ButtonStyleProps } from '../../types'

export const ButtonContainer = styled.TouchableOpacity<ButtonStyleProps>(props => ({
    padding:10,
    alignItems:'center',
    backgroundColor:props.background,
    flexDirection:'row',
    justifyContent:'center',
    borderRadius:20
}))

export const ButtonText = styled.Text<ButtonStyleProps>(props => ({
    fontSize:14,
    fontWeight:'400',
    color:props.textColor,
    marginLeft:3
}))