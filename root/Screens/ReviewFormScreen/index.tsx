import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Alert, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import Button from '../../../components/Button';
import CustomModal from '../../../components/CustomModal';
import Input from '../../../components/Input';
import type { RootState } from '../../../store';
import { useAppDispatch } from '../../../store/index';
import { rateCount } from '../../../store/slices/formSlice';
import { ImageViewer, NameContainer, PickImageContainer, RateStarContainer, RateStars, RateTitle, ReviewContainer, SafeAreaContainer, SubmitContainer } from './styles';


const ReviewFormScreen = () => {
    const [name, setName] = useState<string>('')
    const [review, setReview] = useState<string>('')
    const [visible, setVisible] = useState<boolean>(false)
    const [selectedImage, setSelectedImage] = useState<string|null>(null)

    const { reviewForm } = useLocalSearchParams()
    const { colors } = useSelector((state:RootState) => state.theme)
    const { stars } = useSelector((state:RootState) => state.form)
    const dispatch = useAppDispatch()

    const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Sorry, we need camera roll permissions to make this work!');
      return false;
    }
    return true;
  };

    const handleRating = (index:number) => {
        dispatch(rateCount(index))
    }

    const handleOnCloseModal = () => {
      setVisible(false)
    }

    const openCamera = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      setSelectedImage(result.assets[0].uri);
      setVisible(false)
    }
  };

  const openImageLibrary = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      setSelectedImage(result.assets[0].uri);
      setVisible(false)
    }
  };
  return (
    <>
    
    <CustomModal
          visible={visible}
          onClose={handleOnCloseModal}
          openCamera={openCamera}
          openGallery={openImageLibrary}/>

    <Stack.Screen options={{
          headerTitle:`Review ${reviewForm}`,
          headerStyle: {
            backgroundColor: colors.background,
            },
          headerTitleStyle:{
            fontWeight:'800',
            color:colors.title
          },
          headerTintColor: colors.text,
          headerShadowVisible: false,
      }}/>
<SafeAreaContainer
    background={colors.background}
    border={colors.borderDark}
    edges={['bottom','right','left']}>


        <RateStarContainer>
          <RateTitle
          title={colors.text}>
            Rate
          </RateTitle>
          <RateStars>
            {
              stars.map((star, index) => (
                <TouchableWithoutFeedback
                key={index}
                onPress={()=>handleRating(index)}>
                <Ionicons 
                name={star as keyof typeof Ionicons.glyphMap} 
                size={28} 
                color={colors.star} />
                </TouchableWithoutFeedback>
              ))
            }
          </RateStars>
        </RateStarContainer>
        
        <NameContainer>
        <Input
        label='Your Name'
        height={50}
        placeholder='Enter Name'
        onChangeText={text => setName(text)}
        value={name}
        />
        </NameContainer>

        <ReviewContainer>      
        <Input
        label='Your Review'
        height={100}
        placeholder='Add Review'
        onChangeText={text => setReview(text)}
        value={review}
        />
        </ReviewContainer>

        {/* <PickImageContainer>
            <Button
              background={colors.backgroundSecondary}
              textColor={colors.text}
              iconName='camera'
              onPress={()=>{setVisible(true)}}
              buttonText='Pick Image'/>
        </PickImageContainer>

        <ImageViewer
        source={{uri:selectedImage}}/> */}

        {selectedImage ? (
          <PickImageContainer>
          <ImageViewer
          source={{uri:selectedImage}}/>
          <Button
            background={colors.buttonDanger}
            textColor='white'
            onPress={()=>{setSelectedImage(null)}}
            iconName='trash'
            buttonText='Remove Image'
            style={{width:'40%'}}
            />
          </PickImageContainer>
        ):(
        <PickImageContainer>
            <Button
              background={colors.backgroundSecondary}
              textColor={colors.text}
              iconName='camera'
              onPress={()=>{setVisible(true)}}
              buttonText='Pick Image'/>
        </PickImageContainer>
        )}

        <SubmitContainer>
          <Button
            background={colors.title}
            textColor='white'
            onPress={()=>{console.log('Submit pressed')}}
            buttonText='Submit'
            style={{paddingTop:15,paddingBottom:15}}/>
        </SubmitContainer>
        
    </SafeAreaContainer>
    </>
  )
}

export default ReviewFormScreen