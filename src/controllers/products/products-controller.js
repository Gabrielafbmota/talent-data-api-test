import path from 'path'
import fs from 'fs'
import readline from 'readline'

const productsController = async (fastify, _opts, done) => {
  const userServices = fastify.container.resolve('userServices')
  const organizationServices = fastify.container.resolve('organizationServices')

  fastify.get('/:organizationName', {
    preValidation: [fastify.authenticate],
  }, async (req, res) => {
    const { organizationName } = req.params
    const { tags } = req.query

    const { level } = await userServices.getLevel({ role: req.user.role })

    const organizations = await organizationServices.organization(organizationName, level)

    if (organizations.length === 0) throw fastify.httpErrors.unauthorized('Você não tem permissão para acessar os produtos dessa organização')

    const filePath = path.join(__dirname, '..', 'fixtures')
    const instream = fs.createReadStream(`${filePath}/products.txt`)

    const rl = readline.createInterface({ input: instream })

    let lines = 0

    const items = []
    rl.on('line', (line) => {
      lines = lines + 1
      const department = line.split(',')[1]
      const tag = line.split(',')[4]

      if (tags) {
        const query = tags?.split(',')
        query.map(item => {
          if (tag.includes(item) && department.includes(organizations[0]?.name)) {
            items.push(line)
          }

        })
      } else {
        if (department.includes(organizations[0]?.name)) {
          items.push(line)
        }
      }

    })
    rl.on('close', () => {
      res.send({ total: items.length + 1, products: items })
    })
  })
  done()
}

export default productsController
