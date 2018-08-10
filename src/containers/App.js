import React from 'react'
import { View, Text } from 'react-native'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <View style={{ flex: 1, marginTop: 42 }}>
    <Text style={{ fontSize: 26 }}>Shopping Cart Example</Text>
    <View style={{ height: 2, backgroundColor: '#000' }} />
    <ProductsContainer />
    <CartContainer />
  </View>
)

export default App
