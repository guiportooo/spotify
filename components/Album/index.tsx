import React from 'react'
import { View, Image, Text, TouchableNativeFeedback } from 'react-native'
import { Album } from '../../types'
import styles from './styles'

export interface AlbumProps extends Album {
  onPress: (id: string) => void
}

const AlbumComponent = ({
  id,
  imageUri,
  artistsHeadline,
  onPress,
}: AlbumProps) => {
  return (
    <TouchableNativeFeedback onPress={() => onPress(id)}>
      <View style={styles.container}>
        <Image style={styles.imageUri} source={{ uri: imageUri }}></Image>
        <Text style={styles.artistsHeadline}>{artistsHeadline}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

export default AlbumComponent
