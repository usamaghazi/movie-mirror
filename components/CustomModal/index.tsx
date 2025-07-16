import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Modal, TouchableWithoutFeedback } from 'react-native'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { CustomModalProps } from '../../types'
import { Button, ButtonContainer, ButtonText, Heading, ModalContainer, Overlay } from './styles'


const CustomModal:React.FC <CustomModalProps> = ({
    visible,
    onClose,
    openCamera,
    openGallery
}) => {
    const { colors } = useSelector((state:RootState)=> state.theme)
    const buttons = [{name:'Camera',icon:'camera'},{name:'Gallery',icon:'images'}]
  return (
    <Modal
    visible={visible}
    transparent={true}
    onRequestClose={onClose}
    animationType='fade'
    statusBarTranslucent={true}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Overlay>
            <TouchableWithoutFeedback onPress={() => {}}>
            <ModalContainer
            background={colors.background}>
              <Heading
              textColor={colors.text}>
                Select Image Source
              </Heading>

              <ButtonContainer>
                  <Button
                  onPress={openCamera}>
                    <Ionicons 
                      name='camera'
                      size={24}
                      color={colors.text}/>
                    <ButtonText
                    textColor={colors.text}>
                      Camera
                    </ButtonText>
                  </Button>

                  <Button
                  onPress={openGallery}>
                    <Ionicons 
                      name='images'
                      size={24}
                      color={colors.text}/>
                    <ButtonText
                    textColor={colors.text}>
                      Gallery
                    </ButtonText>
                  </Button>
                
              </ButtonContainer>
            </ModalContainer>
            </TouchableWithoutFeedback>
            </Overlay>
        </TouchableWithoutFeedback>

    </Modal>
  )
}

export default CustomModal