import { COLORS, TEXTSIZE } from '../../constants/theme'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.color5,
  },
  title: {
    alignSelf: 'center',
    fontSize: TEXTSIZE.title,
    fontWeight: '500',
    paddingVertical: '2%',
  },
})
