import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

const HeartButton = () => {
    const { colors } = useSelector((state:RootState)=> state.theme)
    const [isFavorited, setIsFavorited] = useState(false)
console.log('HeartButton rendered, isFavorited:', isFavorited)
  return (
    
            <TouchableOpacity 
            onPress={() => {
                console.log('Heart button clicked!')
                    
                setIsFavorited(!isFavorited)}}>
                {/* <Ionicons 
                    name={isFavorited ? "heart" : "heart-outline"} 
                    size={28} 
                    color={colors.title} 
                /> */}
                {
                    isFavorited ? (
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
            </TouchableOpacity>
        
  )
}

export default HeartButton