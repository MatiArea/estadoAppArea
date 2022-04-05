import { CATEGORIES } from '../../constants/categories'
import { categoryTypes } from '../types/category.types'

const { SELECT_CATEGORY } = categoryTypes

const initialState = {
  categories: CATEGORIES,
  selectedCategory: null,
}

const CategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_CATEGORY:
      const indexCategory = state['categories'].findIndex(
        (category) => category['id'] === payload['categoryId']
      )
      if (indexCategory === -1) return state
      return {
        ...state,
        selectedCategory: state['categories'][indexCategory],
      }

    default:
      return state
  }
}

export default CategoryReducer
