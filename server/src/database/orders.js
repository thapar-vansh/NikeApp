import { getDb } from './db.js'

export const getOrder = async (ref) => {
  return await getDb().orders.findOne({ ref })
}

export const createOrder = async (order) => {
  const result = await getDb().orders.insertOne(order)
  return { ...order, _id: result.insertedId }
}
