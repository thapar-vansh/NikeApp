import express from 'express'
import { getAllProducts, getProduct } from '../database/products.js'
export const router = express.Router()

router.get('/', async (req, res) => {
  const products = await getAllProducts()
  //   console.log(products)
  res.send({ status: 'OK', data: products })
})

router.get('/:productId', async (req, res) => {
  try {
    const product = await getProduct(req.params.productId)
    res.send({ status: 'OK', data: product })
    if (!product) {
      res.status(404).send({ status: 'FAILED', error: 'Product not found' })
      return
    }
  } catch (e) {
    res.status(401).send({ status: 'FAILED', error: e.message })
  }
})
