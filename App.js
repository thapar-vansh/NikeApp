import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image, View } from 'react-native'
import ProductDetailsScreen from './src/screens/ProductDetailsScreen'
import ProductsSrceen from './src/screens/ProductsSrceen'
import ShoppingCartScreen from './src/screens/ShoppingCart'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsSrceen /> */}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCartScreen />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
