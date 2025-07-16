import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
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

const profilePic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s'

const ReviewCard = () => {

    const { colors } = useSelector((state:RootState) => state.theme)
    const today = new Date();

    function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}
    
  return (
    <ReviewCardContainer>
        <ReviewCardInfo>
          <PersonalInfo>
            <Picture
            source={{uri:profilePic}}
            resizeMode={'cover'}/>
            <UserName
            userName={colors.text}>
                Mr Chips
            </UserName>
          </PersonalInfo>
          <Ionicons 
          name="trash" 
          color={colors.buttonDanger} 
          size={18}/>
        </ReviewCardInfo>
        <RateDateContainer>
            <StarsContainer>
                {[1, 2, 3, 4, 5].map(star => (
                <Ionicons key={star} name="star" size={15} color="#FFD700" />
                ))}
            </StarsContainer>
            <ReviewDate
            dateText={colors.textSecondary}>
                {formatDate(today)}
            </ReviewDate>
        </RateDateContainer>
        <ReviewText
        reviewTextColor={colors.textSecondary}>
            A masterfully crafted film that stays with you long after the credits roll.
            This movie delivers on every level - stunning visuals, compelling storytelling, and outstanding performances.
            A rare gem that perfectly balances entertainment with meaningful storytelling.
            An absolute triumph that showcases the power of cinema at its finest.
        </ReviewText>
    </ReviewCardContainer>
  )
}

export default ReviewCard