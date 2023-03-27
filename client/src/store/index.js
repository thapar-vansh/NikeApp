import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './productsSlice'
import { cartSlice } from './cartSlice'

// store is the combination of reducers and state
export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
})
