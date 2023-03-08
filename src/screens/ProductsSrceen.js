import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productsSlice } from '../store/productsSlice'

const ProductsSrceen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch()
  // or use the useNavigation hook
  // const navigation = useNavigation()
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // update selected product
            dispatch(productsSlice.actions.setSelectedProduct(item.id))
            navigation.navigate('Product Details')
          }}
          style={styles.itemContainer}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
})

export default ProductsSrceen
