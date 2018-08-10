import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const ProductsList = ({ title, children }) => (
  <View style={{ flex: 1, marginTop: 20 }}>
    <Text style={{ fontSize: 20 }}>{title}</Text>
    <View style={{ flex: 2, flexDirection: 'column' }}>{children}</View>
  </View>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
