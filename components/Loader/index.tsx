import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="#c60030"/>
  </View>
  )
}

export default Loader