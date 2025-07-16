import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { useAppDispatch } from '../../store'
import { deleteUserReview } from '../../store/slices/formSlice'
import { ReviewCardProps } from '../../types'
import {
  PersonalInfo,
  Picture,
  RateDateContainer,
  ReviewCardContainer, ReviewCardInfo,
  ReviewDate,
  ReviewText,
  StarsContainer,
  UserName
} from './styles'


const ReviewCard:React.FC <ReviewCardProps> = ({
  userName,
  userReview,
  userImage,
  date,
  stars,
  index
}) => {

    const { colors } = useSelector((state:RootState) => state.theme)
    
    const dispatch = useAppDispatch();

    function formatDate(date: string): string {
      const dateObj = new Date(date);
      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = String(dateObj.getMonth() + 1).padStart(2, '0'); 
      const year = dateObj.getFullYear();
      return `${day}/${month}/${year}`;
    }

    const removeReview = (index:number) => {
        dispatch(deleteUserReview(index))
    }
    
  return (
    <ReviewCardContainer>
        <ReviewCardInfo>
          <PersonalInfo>
            <Picture
            source={{uri:userImage}}
            resizeMode={'cover'}/>
            <UserName
            userName={colors.text}>
                {userName}
            </UserName>
          </PersonalInfo>

          <TouchableOpacity onPress={()=>removeReview(index)}>
          <Ionicons 
          name="trash" 
          color={colors.buttonDanger} 
          size={18}/>
          </TouchableOpacity>

        </ReviewCardInfo>
        <RateDateContainer>
            <StarsContainer>
                {stars.map((star,index) => (
                <Ionicons 
                key={index} 
                name={star as keyof typeof Ionicons.glyphMap} 
                size={15} 
                color="#FFD700" />
                ))}
            </StarsContainer>
            <ReviewDate
            dateText={colors.textSecondary}>
                {formatDate(date)}
            </ReviewDate>
        </RateDateContainer>
        <ReviewText
        reviewTextColor={colors.textSecondary}>
            {userReview}
        </ReviewText>
    </ReviewCardContainer>
  )
}

export default ReviewCard

