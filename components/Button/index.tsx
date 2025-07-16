import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ButtonProps } from '../../types'
import { ButtonContainer, ButtonText } from './styles'

const Button: React.FC <ButtonProps> = ({
    background,
    textColor,
    iconName,
    onPress,
    buttonText,
    style
}) => {
  return (
        <ButtonContainer
        background={background}
        onPress={onPress}
        style={style}>
            {iconName && <Ionicons 
                name={iconName as keyof typeof Ionicons.glyphMap} 
                size={18} 
                color={textColor}/>}
            <ButtonText
            textColor={textColor}>
             {buttonText}
            </ButtonText>
        </ButtonContainer>
  )
}

export default Button