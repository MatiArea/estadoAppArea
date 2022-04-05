import { cartTypes } from '../types/cart.types'

const { ADD_ITEM, REMOVE_ITEM, COMFIRM_CART } = cartTypes

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: { item },
})

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: { itemId: id },
})
