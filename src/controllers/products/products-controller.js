
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

    res.send('OK')
  })

  done()
}

export default productsController
