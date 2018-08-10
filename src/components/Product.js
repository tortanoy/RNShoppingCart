import React from 'react'
import { View, Text} from 'react-native'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title }) => (
  <View style={{ flex: 1, height: 32, marginTop: 10 }}>
    <Text>{title} - {price}{quantity ? ` x ${quantity}` : null}</Text>
  </View>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
