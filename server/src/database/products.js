import { ObjectId } from 'mongodb'
import {getDb} from './db.js'

export const getAllProducts = async () => {
  return await getDb().products.find().toArray()
}
export const getProduct = async (id) => {
  return await getDb().products.findOne({ _id: new ObjectId(id) })
}
