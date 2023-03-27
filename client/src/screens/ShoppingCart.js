import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import {
  selectDeliveryPrice,
  selectSubTotal,
  selectTotal,
} from '../store/cartSlice'

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
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
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
