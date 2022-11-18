const express = require('express')
const router = express.Router()
const User = require('../controllers/UserController')

const userCtrl = new User()

//Exibir informação
router.get('/', async (req, res) => {
  let result = await userCtrl.getUsers(req.query)
  res.statusCode = result.status
  res.send(result.result)
})

//Exibir informação pelo id
router.get('/:id', async (req, res) => {
  let result = await userCtrl.getUser(req.params.id)
  res.statusCode = result.status
  res.send(result.result)
})

//Criar uma informação
router.post('/:id', async (req, res) => {
  const result = await userCtrl.createUser(req.body)
  res.statusCode = result.status
  res.send(result.result)
})

//Editar todas as informações
// router.put('/', async (req, res) => {
//   userCtrl.updateUser(req.params.id{})
//   res.send('Dados alterados com sucesso!')
// })

//Editar parcialmente as informações
router.patch('/:id', async (req, res) => {
  const result = await userCtrl.updateUser(req.params.id, req.body)
  res.statusCode = result.status
  res.send(result.result)
})

//Deletar informação
router.delete('/:id', async (req, res) => {
  const result = await userCtrl.deleteUser(req.params.id)
  res.statusCode = result.status
  res.send(result.result)
})

module.exports = router
