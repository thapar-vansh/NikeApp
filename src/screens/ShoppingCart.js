import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'

const ShoppingCartTotals = () => (
  <View style={styles.totalsContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>410 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>10 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>420 US$</Text>
    </View>
  </View>
)

const ShoppingCart = () => {
  return (
    <>
      <FlatList
        data={cart}
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
