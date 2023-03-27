import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Pressable, Text, View } from 'react-native'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import ProductsSrceen from './screens/ProductsSrceen'
import ShoppingCart from './screens/ShoppingCart'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { selectNumOfItems } from './store/cartSlice'
import TrackOrder from './screens/TrackOrder'

const Stack = createNativeStackNavigator()
const Navigation = () => {
  const numOfItems = useSelector(selectNumOfItems)
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: 'white' },headerTitleAlign: 'center', }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsSrceen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                style={{ flexDirection: 'row' }}
                onPress={() => navigation.navigate('Cart')}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: 500 }}>
                  {numOfItems}
                </Text>
              </Pressable>
            ),
            headerLeft: () => (
              <MaterialCommunityIcons
                onPress={() => navigation.navigate('Track Order')}
                name="truck-delivery"
                size={22}
                color="gray"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
        <Stack.Screen name="Track Order" component={TrackOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
