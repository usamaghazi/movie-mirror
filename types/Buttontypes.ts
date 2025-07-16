import { ViewStyle } from 'react-native'

export interface ButtonStyleProps {
    background?:string
    textColor?:string
}

export interface ButtonProps {
    background:string
    textColor:string
    iconName?:string,
    onPress: ()=> void,
    buttonText:string,
    style?:ViewStyle
}