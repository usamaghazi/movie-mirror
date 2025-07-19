import styled from 'styled-components/native'
import { InputStyleProps } from '../../types'

export const InputContainer = styled.View({})

export const Label = styled.Text<InputStyleProps>(props => ({
    fontSize: 20,
    fontWeight:'bolder',
    color:props.text
}))

export const InputText = styled.TextInput<InputStyleProps>(props => ({
    borderWidth:1,
    borderColor:props.isFocused ? '#fa7f04':props.border,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10,
    height:props.height,
    color:props.text,
    textAlignVertical: 'top',
    fontSize: 16,
    borderRadius:7,
    marginTop:10,

    ...(props.width && {
        width:props.width
    }),

    ...(props.nullishName || props.nullishReview ? {
        borderColor:props.borderWarn
    } : {})
}))