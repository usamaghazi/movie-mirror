
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const BackButton = () => {
    const router  = useRouter()
  return (
    <TouchableOpacity onPress={()=> router.back()}>
        <Ionicons name="chevron-back" size={26} color="white" />
    </TouchableOpacity>
  )
}

export default BackButton