import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CartListItem from '../components/CartListItem'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectDeliveryPrice,
  selectSubTotal,
  selectTotal,
  cartSlice,
} from '../store/cartSlice'
import { useCreateOrderMutation } from '../store/apiSlice'

const ShoppingCartTotals = () => {
  const subTotal = useSelector(selectSubTotal)
  const deliveryFee = useSelector(selectDeliveryPrice)
  const total = useSelector(selectTotal)

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  )
}

const ShoppingCart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const subTotal = useSelector(selectSubTotal)
  const deliveryFee = useSelector(selectDeliveryPrice)
  const total = useSelector(selectTotal)
  const [createOrder, { data, isLoading, error }] = useCreateOrderMutation()
  console.log(error, isLoading)
  const onCreateOrder = async () => {
    const result = await createOrder({
      items: cartItems,
      subTotal,
      deliveryFee,
      total,
      customer: {
        name: 'Vansh',
        address: 'myhome',
        email: 'vansh@sixergame.com',
      },
    })
    if (result.data?.status === 'OK') {
      Alert.alert(
        'Order has been submitted',
        `Your order reference is: ${result.data.data.ref}`
      )
      dispatch(cartSlice.actions.clear())
    }
  }
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable onPress={onCreateOrder} style={styles.button}>
        <Text style={styles.buttonText}>
          Checkout{isLoading && <ActivityIndicator />}{' '}
        </Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    padding: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 16,
    fontWeight: 500,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    width: '90%',
    bottom: 30,
    padding: 20,
    alignItems: 'center',
    borderRadius: 100,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 500,
    fontSize: 16,
  },
})
export default ShoppingCart
