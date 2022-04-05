import { COLORS, TEXTSIZE } from '../../constants/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: COLORS.color5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  title: {
    fontSize: TEXTSIZE.title,
    alignSelf: 'center',
    fontWeight: '700',
    marginVertical: '2%',
  },
  description: {
    fontSize: TEXTSIZE.description,
    alignSelf: 'center',
    fontWeight: '600',
    marginBottom: '5%',
  },
  price: {
    fontSize: TEXTSIZE.description,
    alignSelf: 'center',
    fontWeight: '900',
    borderWidth: 0.5,
    padding: '2%',
    borderRadius: 10,
    backgroundColor: '#fff1e6',
  },
  image: {
    height: 250,
    width: 250,
    resizeMode: 'contain',
    borderRadius: 50,
  },
})
