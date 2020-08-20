import React from 'react'
import { connect } from 'react-redux'
import { addProductToCart, checkout, cartProducts, cartTotal } from './cartSlice'

class ShoppingCart extends React.Component {

    render() {
        const { checkoutStatus, products, total, checkout } = this.props
        return (
            <div>
                <h1>Shopping Cart</h1>
                <ul>
                    {products.map((product)=>{
                        return <li>
                            {product.title} - {product.price } - {product.quantity}
                        </li>
                    })}
                </ul>
                <p>Total: {total}</p>
                <button onClick={checkout}>Checkout</button>
                {checkoutStatus && (<p v-if="checkoutStatus">{checkoutStatus}</p>)}
            </div>
        )
    }
}

export default connect((state) => ({
    products: cartProducts(state),
    total: cartTotal(state),
    checkoutStatus: state.cart.checkoutStatus
})
, {
    addProductToCart,
    checkout
})(ShoppingCart)