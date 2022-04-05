import { FlatList, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { filteredProducts, selectProduct } from '../../store/actions/product.action'

import { PRODUCTS } from '../../constants/products'
import ProductItem from '../../components/productItem'
import { styles } from './styles'

const CategoryScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const productsFilter = useSelector((state) => state['products']['filteredProducts'])
  const selectedCategory = useSelector((state) => state['categories']['selectedCategory'])

  const handleSelectCategory = (product) => {
    dispatch(selectProduct(product['id']))
    navigation.navigate('Product', { product, name: product['name'] })
  }

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={handleSelectCategory} />

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory['id']))
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={productsFilter}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={(item) => item['id']}
        renderItem={renderItem}
      />
    </View>
  )
}

export default connect()(CategoryScreen)
