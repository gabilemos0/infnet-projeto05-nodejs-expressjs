const User = require('../models/User')
const bcrypt = require('bcrypt')
const { Sequelize } = require('sequelize')
const Op = Sequelize.Op

class AuthController {
  async login(userEmail, password) {
    console.log(userEmail, password)

    const user = await User.findOne({
      where: {
        [Op.or]: {
          username: userEmail,
          email: userEmail
        }
      }
    })
    if (user) {
      let passVerify = bcrypt.compareSync(password, user.password)
      if (passVerify) {
        return {
          result: {
            msg: 'Usuário logado com sucesso.'
          },
          status: 200
        }
      }
    }
    return {
      result: 'Usuário não encontrado.',
      status: 401
    }
  }
}

module.exports = AuthController
