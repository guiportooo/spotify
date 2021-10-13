import React from 'react'
import { View, Image, Text } from 'react-native'
import { Song } from '../../types'
import styles from './styles'

export interface SongProps extends Song {}

const SongComponent = ({ id, imageUri, title, artists }: SongProps) => (
  <View style={styles.container}>
    <Image style={styles.imageUri} source={{ uri: imageUri }} />
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.artists}>{artists}</Text>
    </View>
  </View>
)

export default SongComponent
