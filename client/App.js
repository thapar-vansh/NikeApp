import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image, View } from 'react-native'
import Navigation from './src/navigation'
import { store } from './src/store/index'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Navigation />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
