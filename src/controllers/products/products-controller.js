
const productsController = async (fastify, _opts, done) => {

  fastify.get('/', {
    preValidation: [fastify.authenticate],
  }, async (req, res) => {
    console.log(req.user)
    res.send('OK')
  })

  done()
}

export default productsController
