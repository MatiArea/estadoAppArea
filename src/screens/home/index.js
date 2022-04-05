import { FlatList, Text, View } from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux'

import { CATEGORIES } from '../../constants/categories'
import CategoryItem from '../../components/categoryItem'
import React from 'react'
import { selectedCategory } from '../../store/actions/category.action'
import { styles } from './styles'

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state['categories']['categories'])
  const handleSelectCategory = (category) => {
    dispatch(selectedCategory(category['id']))
    navigation.navigate('Category', { id: category['id'], category: category })
  }

  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={handleSelectCategory} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        style={{ height: '90%' }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

export default connect()(HomeScreen)
