import React from 'react'
import { View, Image, Text } from 'react-native'
import { Album } from '../../types'
import styles from './styles'

export interface AlbumProps extends Album {}

const AlbumComponent = ({ id, imageUri, artistsHeadline }: AlbumProps) => (
  <View style={styles.container}>
    <Image style={styles.imageUri} source={{ uri: imageUri }}></Image>
    <Text style={styles.artistsHeadline}>{artistsHeadline}</Text>
  </View>
)

export default AlbumComponent
