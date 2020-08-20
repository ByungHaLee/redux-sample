import { createSlice } from '@reduxjs/toolkit';
import shop from '../../api/shop'
import {productIsInStock, decrementProductInventory} from '../ProductList/productListSlice'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        checkoutStatus: null
    },
    reducers: {
        pushProductToCart: (state, action) => {
            state.items.push({
                id: action.payload,
                quantity: 1
            })
        },

        incrementItemQuantity: (state, action) => {
            const item = action.payload
            state.items.find(el => el.id === item.id).quantity++
        },

        setCheckoutStatus: (state, action) => {
            state.checkoutStatus = action.payload
        },

        emptyCart: (state) => {
            state.items = []
        }
    },
});

export const { pushProductToCart, incrementItemQuantity, setCheckoutStatus, emptyCart } = cartSlice.actions;

export const addProductToCart = (product) => (dispatch, getState) => {
    if(productIsInStock(product)) {
        const cartItem = getState().cart.items.find(item => item.id === product.id)
        if(!cartItem) {
            dispatch(pushProductToCart(product.id))
        } else {
            dispatch(incrementItemQuantity(cartItem))
        }
        dispatch(decrementProductInventory(product))
    }
}

export const selectProductList = state => state.cart.items;

export const checkout = () => (dispatch, getState) => {
    shop.buyProducts(getState().items, () => {
        dispatch(emptyCart())
        dispatch(setCheckoutStatus('success'))
    },
    () => {
        dispatch(setCheckoutStatus('fail'))
    })
}
export const cartProducts = state =>
    state.cart.items.map( cartItem => {
        const product = state.products.items.find(product => product.id === cartItem.id)
        return {
            title: product.title,
            price: product.price,
            quantity: cartItem.quantity
        }
    })
export const cartTotal = state => cartProducts(state).reduce((total, product) => total + product.price * product.quantity, 0)

export default cartSlice.reducer;
