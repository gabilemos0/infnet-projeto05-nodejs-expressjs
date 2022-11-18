const { Sequelize } = require('sequelize')
const Product = require('../models/Product')
const GenericController = require('./GenericController')
const Op = Sequelize.Op

// const PRODUCTS = {
//   1: {
//     name: 'Par de Brincos Serpente',
//     description:
//       'Esse brinco é de parar o trânsito e que todas as suas amigas vão comentar! Um acessório apaixonante, diferenciado e mega estiloso, que inspira poder, mistério e encanto, atraindo muitos olhares.',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/elegance/foto10-888x1216.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/elegance/foto9-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/produtos/colecoes/elegance/BL-4683-580x795.webp'
//     ],
//     price: 153.72,
//     promoPrice: 0
//   },
//   2: {
//     name: 'Pulseira Portuguesa Com Coração',
//     description:
//       'As pulseiras com pingente de coração são puro charme! Os acessórios de coração são românticos e requintados! Essa linda pulseira dourada com elos e pingente de coração, irá transformar seus looks!',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/pulseira-coracao-grande-3-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/pulseira-coracao-grande-1-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/pulseira-coracao-grande-2-580x795.webp'
//     ],
//     price: 145.32,
//     promoPrice: 103.8
//   },
//   3: {
//     name: 'Par de Brincos Ear Hook',
//     description:
//       'O Ear Hook ou "Gancho de Orelha" é um modelo de brinco em que o acessório aparenta estar "pendurado", pois ele se encaixa no lóbulo da orelha.',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/elegance/foto17-888x1216.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/elegance/foto16-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/produtos/colecoes/elegance/BL-4651-580x795.webp'
//     ],
//     price: 115.08,
//     promoPrice: 82.2
//   },
//   4: {
//     name: 'Colar Jack 3 Corações',
//     description:
//       'Esse colar de coração, tem um lindo acabamento pedra de zircônia. Os acessórios com detalhes em forma de coração são lindos e delicados, representam o amor de uma forma singular e elegante, dando um toque todo especial ao look. Esse acessório pode ser usado nas mais diversas ocasiões.',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/colar-color-lux-2-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/colar-color-lux-4-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/colar-color-lux-3-580x795.webp'
//     ],
//     price: 140.28,
//     promoPrice: 100.2
//   },
//   5: {
//     name: 'Pulseira gratidão corrente',
//     description:
//       'Essa pulseira perfeita possui um delicado acabamento e é uma otima opção para quem quer demonstrar o quão grato é pela vida através de um acessório.',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/elegance/foto52-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/produtos/colecoes/elegance/PB-1105-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/elegance/foto54-580x795.webp'
//     ],
//     price: 94.92,
//     promoPrice: 0
//   },
//   6: {
//     name: 'Par de Brincos Argola grande com Zircônia',
//     description:
//       'Quem é fã de argolas grandes, vai se apaixonar por esta! Linda e delicada argola, com um design encantador! ela é um acessório atemporal e perfeito para realizar diversas composições. Leva a pedra zircônia, conhecida como "substituta do diamante" por ser linda e muito brilhante.',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/argola-zirconia-2-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/argola-zirconia-3-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/argola-zirconia-1-580x795.webp'
//     ],
//     price: 111.72,
//     promoPrice: 79.8
//   },
//   7: {
//     name: 'Gargantilha elos com pingente de coração',
//     description:
//       'Esse lindo Colar com pingente em formato de coração é simples mas de uma beleza única. Bastante versátil, também, pois pode ser usado sozinho ou combinado. Colares são acessórios garantidos para um visual sensacional! Use e abuse.',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/colar-coracao-4-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/colar-coracao-2-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/colar-coracao-3-580x795.webp'
//     ],
//     price: 199.08,
//     promoPrice: 142.2
//   },
//   8: {
//     name: 'Pulseira Medalhas Penduradas',
//     description:
//       'Essa pulseira é encantadora! Traz consigo um olhar moderno e sofisticado, ideal para realizar combinações incríveis. Composta por três correntes delicadas com pingentes de medalhas e é perfeita para realizar composições intensas e elegantes. Não dá para ficar sem!',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/pulseira-medalha-4-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/pulseira-medalha-3-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/pulseira-medalha-7-580x795.webp'
//     ],
//     price: 123.48,
//     promoPrice: 88.2
//   },
//   9: {
//     name: 'Par de Brincos Pingente Pena',
//     description:
//       'Esse brinco é lindo, com um belíssimo e delicado design de pena. A pena, além de ser um símbolo super em alta e muito utilizado na moda, simboliza pureza, esperança, liberdade e positividade, podendo atuar como proteção de energias ruins.',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/folha-2-888x1216.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/folha-1-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/folha-3-580x795.webp'
//     ],
//     price: 94.92,
//     promoPrice: 0
//   },
//   10: {
//     name: 'Pulseira Pedrarias Com Cartier',
//     description:
//       'Essa linda pulseira, é acessório incrível e encantador! Ideal para você que gosta de valorizar o seu look. Composto por pedras de zircônia, traz consigo um olhar moderno e luxuoso. Perfeito para usar em ocasiões formais, festas, jantares especiais, dentre outros! Afinal, você decide onde vai arrasar.',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/pulseira-cartier-1-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/pulseira-cartier-2-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/lux/pulseira-cartier-3-580x795.webp'
//     ],
//     price: 128.52,
//     promoPrice: 91.8
//   },
//   11: {
//     name: 'Colar Patuá Strass',
//     description:
//       'Esse lindo colar com pingentes religiosos é uma peça delicada e perfeita para quem ama demonstrar sua devoção e religiosidade em seus acessórios. Os pingentes consistem em uma cruz, uma imagem de Nossa Senhora e uma medalha de São Bento. Os colares religiosos são sempre muito bem vindos na hora de compor o visual. Lindos e cheio de significados esses acessórios conseguem te deixar linda e protegida ao mesmo tempo.',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/patua-3-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/day-cawany/patua-4-580x795.webp'
//     ],
//     price: 118.2,
//     promoPrice: 0
//   },
//   12: {
//     name: 'Par de Brincos Elos ',
//     description:
//       'Acessórios com formato de corrente estão super na moda e podem ser usados em diferentes estilos. Este brinco de elos dá um ar arrojado e poderoso, mesmo tendo um tamanho mais discreto. Simplesmente perfeito!',
//     infos:
//       'Todas nossas peças passam por diversos processos rigorosos para garantir durabilidade e brilho sem causar irritação. Levam banhos dourados de até 10 milésimos de ouro 18K. Livre de níquel. Garantia de 1 ano.',
//     images: [
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/elegance/foto12-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/elegance/foto14-580x795.webp',
//       'https://www.ambaya.com.br/image/cachewebp/catalog/ambaya/produtos/colecoes/elegance/BL-4674-580x795.webp'
//     ],
//     price: 103.32,
//     promoPrice: 73.8
//   }
// }

class ProductController extends GenericController {
  constructor() {
    super()
  }

  async getProducts(params) {
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
        result = await Product.findAll({
          where: {
            name: {
              [Op.like]: `%${params.q}%`
            }
          },
          ...order,
          ...paramsLimit
        })
      } else {
        result = await Product.findAll({
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

  async getProduct(id) {
    try {
      const result = await Product.findByPk(id)
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

  async createProduct(data) {
    try {
      const product = await Product.create(data)
      return {
        status: 200,
        result: `Produto ${product.id} criado com sucesso!.`
      }
    } catch (err) {
      return {
        status: 500,
        result:
          'Um erro inesperado ocorreu, contate o administrador do sistema.'
      }
    }
  }

  async updateProduct(id, data) {
    try {
      await Product.update(data, {
        where: {
          id: id
        }
      })
      return {
        status: 200,
        result: `Produto ${id} atualizado com sucesso!.`
      }
    } catch (err) {
      return {
        status: 500,
        result:
          'Um erro inesperado ocorreu, contate o administrador do sistema.'
      }
    }
  }

  async deleteProduct(id) {
    try {
      await Product.destroy({
        where: {
          id: id
        }
      })
      return {
        status: 200,
        result: `Produto ${id} deletado com sucesso!.`
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

module.exports = ProductController
