import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { InputProps } from '../../types'
import { InputContainer, InputText, Label } from './styles'


const Input:React.FC<InputProps> = ({ 
    label,
    height,
    placeholder,
    onChangeText,
    value,
    emptyName = false,
    emptyReview = false,
    width
 }) => {
    const { colors } = useSelector((state:RootState) => state.theme)
    const [isFocused, setIsFocused] = useState(false)
  return (
    <InputContainer>
      {label? (
        <Label
        text={ colors.text}>
            { label }
        </Label>
      ):null}  
        <InputText
        style={{margin:0}}
        placeholder={placeholder}
        placeholderTextColor={colors.textDisabled}
        onChangeText={onChangeText}
        value={value}
        border={colors.borderDark}
        height={height}
        width={width}
        text={colors.text}
        nullishName={emptyName}
        nullishReview={emptyReview}
        borderWarn={colors.buttonDanger}
        isFocused={isFocused}
        onFocus={()=>{setIsFocused(true)}}
        onBlur={() => {setIsFocused(false)}}
        />
    </InputContainer>
  )
}

export default Input