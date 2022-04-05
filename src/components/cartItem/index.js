import { Image, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { styles } from './styles'

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          onPress={() => onDelete(item)}
        >
          <View>
            <Text style={styles.title}>{item['name']}</Text>
            <Text style={styles.description}>{item['description']}</Text>
            <Text style={styles.description}>{item['price']}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem
