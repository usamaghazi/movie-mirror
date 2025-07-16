export interface InputStyleProps {
    text?:string
    border?:string
    height?:number
}

export interface InputProps {
    label:string
    height:number
    placeholder:string
    onChangeText: (text:string) => void
    value:string
}