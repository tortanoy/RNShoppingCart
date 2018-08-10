import React from 'react'
import { View, Button, Text } from 'react-native'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <Text>Please add some products to cart.</Text>
  )

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18 }}>Your Cart</Text>
      <View style={{ flex: 2 }}>{nodes}</View>
      <Text style={{ fontSize: 14 }}>Total: {total}</Text>
      <Button 
        onPress={onCheckoutClicked}
        title="Checkout" 
      />
    </View>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
