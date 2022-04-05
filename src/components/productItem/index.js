import { Image, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { styles } from './styles'

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          onPress={() => onSelected(item)}
        >
          <View
            style={{
              alignSelf: 'center',
            }}
          >
            <Image style={styles.iconImage} source={item['image']} />
          </View>
          <View style={{ width: '55%' }}>
            <Text style={styles.title}>{item['name']}</Text>
            <Text numberOfLines={1} style={styles.description}>
              {item['description']}
            </Text>
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

export default ProductItem
