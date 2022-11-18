const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

productCtrl = new ProductController()

//Exibir informação
router.get('/', async (req, res) => {
  let result = await productCtrl.getProducts(req.query)
  res.statusCode = result.status
  res.send(result.result)
})

//Exibir informação
router.get('/:id', async (req, res) => {
  let result = await productCtrl.getProduct(req.params.id)
  res.statusCode = result.status
  res.send(result.result)
})

//Criar uma informação
router.post('/:id', async (req, res) => {
  const result = await productCtrl.createProduct(req.body)
  res.statusCode = result.status
  res.send(result.result)
})

// //Editar informação
// router.put('/', async (req, res) => {
//   res.send('Olá mundo rota auth!')
// })

//Editar informação
router.patch('/:id', async (req, res) => {
  const result = await productCtrl.updateProduct(req.params.id, req.body)
  res.statusCode = result.status
  res.send(result.result)
})

//Deletar informação
router.delete('/:id', async (req, res) => {
  const result = await productCtrl.deleteProduct(req.params.id)
  res.statusCode = result.status
  res.send(result.result)
})

module.exports = router
