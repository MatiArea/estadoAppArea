import { combineReducers, createStore } from 'redux'

import CartReducer from './reducers/cart.reducer'
import CategoryReducer from './reducers/category.reducer'
import ProductReducer from './reducers/product.reducer'

const RootReducer = combineReducers({
  categories: CategoryReducer,
  carts: CartReducer,
  products: ProductReducer,
})

export default createStore(RootReducer)
