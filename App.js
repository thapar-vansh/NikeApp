import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image, View } from 'react-native'
import Navigation from './src/navigation'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
