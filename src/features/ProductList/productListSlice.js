import { createSlice } from '@reduxjs/toolkit';
import shop from '../../api/shop'

export const productListSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
    },
    reducers: {
        setProducts (state, action) {
            // update products
            state.items = action.payload
        },
        decrementProductInventory (state, action) {
            const product = action.payload
            state.items.find(el => el.id === product.id).inventory--
        }
    },
});

export const { setProducts, decrementProductInventory } = productListSlice.actions;

export const fetchProducts = (cb) => dispatch => {
    return new Promise((resolve, reject) => {shop.getProducts(products => {
        dispatch(setProducts(products))
        resolve()
    })})
}

export const productIsInStock = (product) => {
    return product.inventory > 0
}

export default productListSlice.reducer;
