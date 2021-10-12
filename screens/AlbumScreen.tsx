import React from 'react'
import { View, Text } from 'react-native'
import { HomeScreenStackProps } from '../types'

const AlbumScreen = ({ route }: HomeScreenStackProps<'AlbumScreen'>) => (
  <View>
    <Text style={{ color: 'white' }}>Album pressed: {route.params.id}</Text>
  </View>
)

export default AlbumScreen
