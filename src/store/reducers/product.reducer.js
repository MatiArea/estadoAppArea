import { PRODUCTS } from '../../constants/products'
import { productTypes } from '../types/product.types'

const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productTypes

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
}

const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: state['products'].find(
          (product) => product['id'] === payload['productId']
        ),
      }
    case FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: state['products'].filter(
          (product) => product['category'] === payload['categoryId']
        ),
      }
    default:
      return state
  }
}

export default ProductReducer
