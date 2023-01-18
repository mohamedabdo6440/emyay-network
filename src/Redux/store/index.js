import { configureStore } from '@reduxjs/toolkit'
import Allproducts from './ProductsSlice'

export const store = configureStore({
  reducer: {
    products: Allproducts,
  },
})

