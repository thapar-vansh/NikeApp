import {
  Image,
  FlatList,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductQuery } from '../store/apiSlice'
import { cartSlice } from '../store/cartSlice'

const ProductDetailsScreen = ({ route }) => {
  const id = route.params.id
  const { data, isLoading, error } = useGetProductQuery(id)

  // const product = useSelector((state) => state.products.selectedProduct)
  const product = data?.data
  const dispatch = useDispatch()

  const { width } = useWindowDimensions()
  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }))
  }
  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>{error.error}</Text>
  }

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{
                uri: item,
              }}
              style={{ width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>$ {product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
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

export default ProductDetailsScreen
