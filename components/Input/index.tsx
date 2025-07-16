import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { InputProps } from '../../types'
import { InputContainer, InputText, Label } from './styles'


const Input:React.FC<InputProps> = ({ 
    label,
    height,
    placeholder,
    onChangeText,
    value
 }) => {
    const { colors } = useSelector((state:RootState) => state.theme)
  return (
    <InputContainer>
        <Label
        text={ colors.text}>
            { label }
        </Label>
        <InputText
        placeholder={placeholder}
        placeholderTextColor={colors.textDisabled}
        onChangeText={onChangeText}
        value={value}
        border={colors.borderDark}
        height={height}
        text={colors.text}
        />
    </InputContainer>
  )
}

export default Input