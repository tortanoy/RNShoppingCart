import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Product from './Product'
import { debounce } from 'lodash'

const Debouncer = (callback) => {
  return debounce(callback, 1000, {
    leading: true,
    trailing: false
  })
}

const ProductItem = ({ product, onAddToCartClicked }) => (
  <View style={{ flex: 1, marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory} />
    <TouchableOpacity
      style={{ 
        flex: 1,
        backgroundColor: 'blue', 
        justifyContent: 'center',
        alignItems: 'center', 
        width: 100 
      }}
      onPress={Debouncer(onAddToCartClicked)}
      disabled={product.inventory > 0 ? false : true}>
      <Text 
        style={{ 
          height: 32, 
          color: 'white'
        }}
      >
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </Text>
    </TouchableOpacity>
  </View>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
