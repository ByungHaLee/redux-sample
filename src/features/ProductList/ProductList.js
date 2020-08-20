import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from './productListSlice'
import { addProductToCart } from '../ShoppingCart/cartSlice'

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:false
        };
    }

    componentWillMount() {
        this.setState({loading : true})
        this.props.fetchProducts()
            .then(() => this.setState({loading : false}))
    }

    render() {
        const { loading } = this.state
        const { products, addProductToCart } = this.props
        return (
            <div>
                <h1>Product List</h1>
                { loading && (<img src="https://i.imgur.com/JfPpwOA.gif"/>)}
                { !loading && (
                    <ul>
                        {products.map((product)=>{
                            return <li key={product.id}>
                                {product.title} - {product.price} - {product.inventory}
                                <button onClick={() => addProductToCart(product)}>Add to cart</button>
                            </li>
                        })}

                    </ul>
                )}
            </div>
        )
    }
}

export default connect(({products}) => ({
    products:products.items
})
, {
    addProductToCart,
    fetchProducts
})(ProductList)