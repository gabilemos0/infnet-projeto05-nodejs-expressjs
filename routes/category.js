const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController')

categoryCtrl = new CategoryController()

//Exibir informação
router.get('/', async (req, res) => {
  let result = await categoryCtrl.getCategories(req.query)
  res.statusCode = result.status
  res.send(result.result)
})

//Exibir informação pelo id
router.get('/:id', async (req, res) => {
  let result = await categoryCtrl.getCategory(req.params.id)
  res.statusCode = result.status
  res.send(result.result)
})

//Criar uma informação
router.post('/:id', async (req, res) => {
  const result = await categoryCtrl.createCategory(req.body)
  res.statusCode = result.status
  res.send(result.result)
})

//Editar todas as informações
// router.put('/', async (req, res) => {
//   categoryCtrl.updateCategory(req.params.id{})
//   res.send('Dados alterados com sucesso!')
// })

//Editar parcialmente as informações
router.patch('/:id', async (req, res) => {
  const result = await categoryCtrl.updateCategory(req.params.id, req.body)
  res.statusCode = result.status
  res.send(result.result)
})

//Deletar informação
router.delete('/:id', async (req, res) => {
  const result = await categoryCtrl.deleteCategory(req.params.id)
  res.statusCode = result.status
  res.send(result.result)
})

module.exports = router
