import { MongoClient } from 'mongodb'

const uri =
  'mongodb+srv://thaparvansh29:yeYcAlFcr8DzFLSY@cluster0.mj4umq6.mongodb.net/?retryWrites=true&w=majority'

let client
export const getDb = () => {
  if (!client) {
    client = new MongoClient(uri)
  }
  const database = client.db('NikeCloneDB')
  const products = database.collection('products')
  const orders = database.collection('orders')
  return { products, orders }
}
