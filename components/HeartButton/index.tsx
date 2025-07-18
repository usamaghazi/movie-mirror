import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

interface HeartButtonProps {
    isFavourite:boolean
}
const HeartButton:React.FC <HeartButtonProps> = ({
    isFavourite
}) => {
    const { selectedMovie } = useSelector((state:RootState) => state.movie)
    const { colors } = useSelector((state:RootState)=> state.theme)
console.log('HeartButton rendered, isFavorited:', isFavourite)
  return (
    
            <View>
                {
                    isFavourite ? (
                    <Ionicons 
                    name= "heart"  
                    size={28} 
                    color={colors.title}/>
                    ) : (
                    <Ionicons 
                    name=  "heart-outline" 
                    size={28} 
                    color= "white"
                    style={{ fontWeight: '900' }}/>
                    )
                }
            </View>
        
  )
}

export default HeartButton