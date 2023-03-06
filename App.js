import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image, View } from 'react-native'
import ProductsSrceen from './src/screens/ProductsSrceen'

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsSrceen />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
