import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import albumDetails from '../data/albumDetails'
import SongComponent from '../components/Song'
import AlbumHeaderComponent from '../components/AlbumHeader'
import { HomeScreenStackProps } from '../types'

const AlbumScreen = ({ route }: HomeScreenStackProps<'AlbumScreen'>) => {
  const { songs } = albumDetails

  useEffect(() => {
    console.warn('Album pressed: ', route.params.id)
  }, [])

  return (
    <View>
      <FlatList
        data={songs}
        renderItem={({ item }) => <SongComponent {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <AlbumHeaderComponent {...albumDetails} />}
      />
    </View>
  )
}

export default AlbumScreen
