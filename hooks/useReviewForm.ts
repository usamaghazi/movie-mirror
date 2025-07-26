import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { useAppDispatch } from '../store';
import { addUserReview, rateCount } from '../store/slices/formSlice';

export const useReviewForm = () => {
  const [name, setName] = useState<string>('');
  const [review, setReview] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [nameNull, setNameNull] = useState<boolean>(false)
  const [reviewNull, setReviewNull] = useState<boolean>(false)
  const [imageNull, setImageNull] = useState<boolean>(false)

  const { colors } = useSelector((state: RootState) => state.theme);
  const { stars } = useSelector((state: RootState) => state.form);
  const { selectedMovie } = useSelector((state:RootState) => state.form)
  const dispatch = useAppDispatch();
  const router = useRouter()

  const requestPermissions = async (): Promise<boolean> => {
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
      setVisible(false);
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
      setVisible(false);
    }
  }

  const removeImage = () => {
    setSelectedImage(null);
  };

    const showModal = () => {
    setVisible(true);
  };

  const dismissImageSnackbar = () => {
  setImageNull(false) 
    }

    const handleSubmit = () => {
      if(name.trim() === ''){
        setNameNull(true)
        setReviewNull(false)
        setImageNull(false)
      }else if(review.trim() === ''){
        setNameNull(false)
        setReviewNull(true)
        setImageNull(false)
      }else if(selectedImage === null || selectedImage.trim() === ''){
        setNameNull(false)
        setReviewNull(false)
        setImageNull(true)
      } else{
           const movieName = selectedMovie?.title
           const date = new Date().toISOString()
           console.log('Submit pressed');
           const reviewData={
              name,
              review, 
              selectedImage, 
              reviewStars:stars, 
              movieName, 
              date
           }
            dispatch(addUserReview(reviewData))
            router.back()
          }
    
    

  };

   return {
    
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
  };
}