const User = require('../models/User')

const { Sequelize } = require('sequelize')
const GenericController = require('./GenericController')
const Op = Sequelize.Op

const bcrypt = require('bcrypt')

class UserController extends GenericController {
  constructor() {
    super()
  }

  async getUsers(params) {
    try {
      let result

      const pagination = this.generatePagination(params),
        limit = pagination[0],
        page = pagination[1]

      const paramsLimit = {
        offset: page * limit,
        limit: parseInt(limit)
      }

      const order = this.generateOrder(params)

      if (params.q) {
        result = await User.findAll({
          where: {
            name: {
              [Op.like]: `%${params.q}%`
            }
          },
          ...order,
          ...paramsLimit
        })
      } else {
        result = await User.findAll({
          ...order,
          ...paramsLimit
        })
      }
      return {
        status: 200,
        result: result
      }
    } catch (err) {
      return {
        status: 500,
        result: {}
      }
    }
  }

  async getUser(id) {
    try {
      const result = await User.findByPk(id)
      return {
        status: 200,
        result: result
      }
    } catch (err) {
      return {
        status: 500,
        result: {}
      }
    }
  }

  async createUser(data) {
    try {
      data.password = bcrypt.hashSync(data.password, 10)
      const user = await User.create(data)
      return {
        status: 200,
        result: `Usuário ${user.id} criado com sucesso!.`
      }
    } catch (err) {
      return {
        status: 500,
        result:
          'Um erro inesperado ocorreu, contate o administrador do sistema.'
      }
    }
  }

  async updateUser(id, data) {
    console.log(data)
    try {
      await User.update(data, {
        where: {
          id: id
        }
      })
      return {
        status: 200,
        result: `Usuário ${id} atualizado com sucesso!`
      }
    } catch (err) {
      return {
        status: 500,
        result:
          'Um erro inesperado ocorreu, contate o administrador do sistema.'
      }
    }
  }

  async deleteUser(id) {
    try {
      await User.destroy({
        where: {
          id: id
        }
      })
      return {
        status: 200,
        result: `Usuário ${id} deletado com sucesso!`
      }
    } catch (err) {
      return {
        status: 500,
        result:
          'Um erro inesperado ocorreu, contate o administrador do sistema.'
      }
    }
  }
}

module.exports = UserController
