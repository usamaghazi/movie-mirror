export interface InputStyleProps {
    text?:string
    border?:string
    height?:number
    nullishName?:boolean
    nullishReview?:boolean
    borderWarn?:string
    width?:number
    isFocused?:boolean
}

export interface InputProps {
    label?:string
    height:number
    placeholder:string
    onChangeText: (text:string) => void
    value:string
    emptyName?:boolean
    emptyReview?:boolean
    width?:number
}