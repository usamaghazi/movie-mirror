import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Snackbar } from 'react-native-paper';
import Button from '../../../components/Button';
import CustomModal from '../../../components/CustomModal';
import Input from '../../../components/Input';
import { useReviewForm } from '../../../hooks/useReviewForm';
import { ImageViewer, NameContainer, PickImageContainer, RateStarContainer, RateStars, RateTitle, ReviewContainer, SafeAreaContainer, SubmitContainer } from './styles';


const ReviewFormScreen = () => {
    const { reviewForm } = useLocalSearchParams()

    const {
          name,
          review,
          visible,
          selectedImage,
          colors,
          stars,
          nameNull,
          reviewNull,
          imageNull,
          setName,
          setReview,
          handleRating,
          handleOnCloseModal,
          openCamera,
          openImageLibrary,
          removeImage,
          showModal,
          handleSubmit,
          dismissImageSnackbar
          } = useReviewForm()

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
      <Snackbar
        visible={imageNull}
        duration={3000}
        onDismiss={dismissImageSnackbar}
        style={{
          backgroundColor: colors.buttonDanger
            }}
        >
          Please Choose Image!!
        </Snackbar>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
          >
          
          <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            >

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
        emptyName={nameNull}
        />
        </NameContainer>

        <ReviewContainer>      
        <Input
        label='Your Review'
        height={100}
        placeholder='Add Review'
        onChangeText={text => setReview(text)}
        value={review}
        emptyReview={reviewNull}
        />
        </ReviewContainer>


        {selectedImage ? (
          <PickImageContainer>
          <ImageViewer
          source={{uri:selectedImage}}/>
          <Button
            background={colors.buttonDanger}
            textColor='white'
            onPress={removeImage}
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
              onPress={showModal}
              buttonText='Pick Image'/>
        </PickImageContainer>
        )}

        <SubmitContainer>
          <Button
            background={colors.title}
            textColor='white'
            onPress={handleSubmit}
            buttonText='Submit'
            style={{paddingTop:15,paddingBottom:15}}/>
        </SubmitContainer>
        
        </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaContainer>
    
    </>
  )
}

export default ReviewFormScreen