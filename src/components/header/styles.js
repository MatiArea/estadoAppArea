import { COLORS } from '../../constants/theme'
import { StyleSheet } from 'react-native'

export const styleHeader = StyleSheet.create({
  header: {
    height: 45,
    marginTop: 0,
    shadowColor: '#404040',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 5 },
  },
  container: {
    height: '100%',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
    backgroundColor: COLORS.color2,
  },
  headerData: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: '1%',
  },
  headerText: {
    fontSize: 22,
    color: '#333',
    letterSpacing: 2,
    color: '#fff',
    fontFamily: 'Roboto-Medium',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Roboto-Light',
  },
})
