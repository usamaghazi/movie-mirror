import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { CustomModalStyleProps } from '../../types';

const { width } = Dimensions.get('window');

export const Overlay = styled.View({
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
})

export const ModalContainer = styled.View<CustomModalStyleProps>(props => ({
    backgroundColor: props.background,
    borderRadius: 12,
    width: width * 0.85,
    paddingLeft:20,
    paddingRigh:15,
    paddingTop:20,
    paddingBottom:20
}))

export const Heading = styled.Text<CustomModalStyleProps>(props => ({
    fontSize:22,
    fontWeight:'bold',
    color: props.textColor
}))

export const ButtonContainer = styled.View({
    marginTop:10,
    paddingLeft:20,
})

export const Button = styled.TouchableOpacity({
    flexDirection:'row',
    alignItems:'center',
    marginTop:15
})

export const ButtonText = styled.Text<CustomModalStyleProps>(props => ({
    fontSize:16,
    fontWeight:'bolder',
    color:props.textColor,
    marginLeft:15
}))