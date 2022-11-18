const express = require('express')
const AuthController = require('../controllers/AuthController')
const UserController = require('../controllers/UserController')
const router = express.Router()

authCtrl = new AuthController()
userCtrl = new UserController()

router.post('/login', async (req, res) => {
  const result = await authCtrl.login(req.body.userEmail, req.body.password)
  res.statusCode = result.status
  res.send(result.result)
})

router.post('/register', async (req, res) => {
  const result = await userCtrl.createUser(req.body)
  res.send(result.result)
})

module.exports = router
