import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { AlbumDetails } from '../../types'
import styles from './styles'

export interface AlbumHeaderProps extends AlbumDetails {}

const AlbumHeaderComponent = ({
  id,
  imageUri,
  artistsHeadline,
  title,
  numberOfLikes,
}: AlbumHeaderProps) => (
  <View style={styles.container}>
    <Image style={styles.imageUri} source={{ uri: imageUri }} />
    <Text style={styles.title}>{title}</Text>
    <View style={styles.info}>
      <Text style={styles.artistsHeadline}>By {artistsHeadline}</Text>
      <Text style={styles.numberOfLikes}> - {numberOfLikes} likes</Text>
    </View>
    <TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Pause</Text>
      </View>
    </TouchableOpacity>
  </View>
)

export default AlbumHeaderComponent
