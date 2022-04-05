import { Button, FlatList, Text, View } from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux'

import CartItem from '../../components/cartItem/index'
import React from 'react'
import { removeItem } from '../../store/actions/cart.action'
import { styles } from './styles'

const Cart = ({ navigation }) => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state['cart']['items'])
  const total = useSelector((state) => state['cart']['total'])

  const handleDeleteItem = (id) => dispatch(removeItem(id))

  const renderItem = ({ item }) => <CartItem item={item} onDelete={handleDeleteItem} />

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList data={items} keyExtractor={(item) => item['id']} renderItem={renderItem} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.total}>Total:</Text>
        <Text style={styles.totalPrice}>${total}</Text>
      </View>
    </View>
  )
}

export default connect()(Cart)
