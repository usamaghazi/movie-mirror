export interface CustomModalStyleProps {
        background?:string
        textColor?:string
}

export interface CustomModalProps {
    visible:boolean
    onClose:() => void
    openCamera: () => void
    openGallery: () => void
}