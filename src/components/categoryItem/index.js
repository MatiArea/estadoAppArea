import { Image, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { styles } from './styles'

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          onPress={() => onSelected(item)}
        >
          <View>
            <Text style={styles.title}>{item['name']}</Text>
            <Text style={styles.description}>{item['description']}</Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
            }}
          >
            <Image
              style={styles.icon}
              source={require('../../../assets/images/icono_flecha.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CategoryItem
