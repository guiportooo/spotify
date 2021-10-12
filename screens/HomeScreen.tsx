import * as React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { RootTabScreenProps } from '../types'
import AlbumCategoryComponent from '../components/AlbumCategory'
import albumCategories from '../data/albumCategories'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => <AlbumCategoryComponent {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})
