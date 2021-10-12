import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Album } from '../../types'
import AlbumComponent from '../Album'
import styles from './styles'

export type AlbumCategoryProps = {
  id: string
  title: string
  albums: Album[]
  onPress: (id: string) => void
}

const AlbumCategoryComponent = ({
  id,
  title,
  albums,
  onPress,
}: AlbumCategoryProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      data={albums}
      renderItem={({ item }) => <AlbumComponent {...item} onPress={onPress} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
)

export default AlbumCategoryComponent
