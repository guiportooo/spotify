import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    padding: 20,
  },
  imageUri: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    flexDirection: 'row',
    marginTop: 10,
  },
  artistsHeadline: {
    color: 'lightgrey',
    textTransform: 'uppercase',
    fontSize: 8,
  },
  numberOfLikes: {
    color: 'lightgrey',
    textTransform: 'uppercase',
    fontSize: 8,
  },
  buttonContainer: {
    backgroundColor: '#1CD05D',
    height: 50,
    width: 170,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
  },
})

export default styles
