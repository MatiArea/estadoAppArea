import { StyleSheet } from 'react-native'
import { TEXTSIZE } from '../../constants/theme'

export const styles = StyleSheet.create({
  categoryContainer: {
    height: '90%',
    width: '99%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '5%',
    padding: '3%',
    backgroundColor: 'lightgreen',
    borderRadius: 20,
  },
  shadowContainer: {
    height: 100,
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.5,
    marginVertical: '3%',
    marginHorizontal: '1%',
  },
  title: {
    fontSize: TEXTSIZE.title,
    fontWeight: '500',
  },
  description: {
    fontSize: TEXTSIZE.description,
    fontWeight: '400',
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  iconImage: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
    borderRadius: 20,
  },
})
