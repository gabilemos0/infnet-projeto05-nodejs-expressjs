class GenericController {
  generatePagination(params) {
    const limit = params.limit ? parseInt(params.limit) : 20
    const page = params.page ? parseInt(params.page) - 1 : 0

    return [limit, page]
  }

  generateOrder(params) {
    const order = params.order ? params.order.split(',') : ['id', 'ASC']
    return {
      order: [order]
    }
  }
}

module.exports = GenericController
