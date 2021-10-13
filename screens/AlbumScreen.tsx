import React from 'react'
import { View, FlatList } from 'react-native'
import albumDetails from '../data/albumDetails'
import SongComponent from '../components/Song'

const AlbumScreen = () => {
  const { songs } = albumDetails
  return (
    <View>
      <FlatList
        data={songs}
        renderItem={({ item }) => <SongComponent {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default AlbumScreen
