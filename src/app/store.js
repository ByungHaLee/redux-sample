import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productListReducer from '../features/ProductList/productListSlice';
import cartReducer from '../features/ShoppingCart/cartSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    products: productListReducer,
    cart: cartReducer
  },
});
