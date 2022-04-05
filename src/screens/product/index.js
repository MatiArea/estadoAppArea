import { Alert, Button, Image, Text, View } from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux'

import { COLORS } from '../../constants/theme'
import React from 'react'
import { addItem } from '../../store/actions/cart.action'
import { styles } from './styles'

const ProductDetail = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const product = useSelector((state) => state['products']['selectedProduct'])
  const { name, description, price, image } = product

  const handleAddToCart = () => dispatch(addItem(product))

  return (
    <View style={styles.container}>
      <View style={styles.topData}>
        <Text style={styles.title}>{name}</Text>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.middleData}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Volver" onPress={() => navigation.goBack()} color={COLORS.color1} />
        <Button
          title="Agregar"
          onPress={() => {
            handleAddToCart()
            Alert.alert('Felicitaciones', 'Se agrego al carrito correctamente', [
              { text: 'Aceptar', onPress: () => navigation.navigate('Home') },
            ])
          }}
          color={COLORS.color2}
        />
      </View>
    </View>
  )
}

export default connect()(ProductDetail)
