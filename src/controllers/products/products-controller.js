
const productsController = async (fastify, _opts, done) => {

  fastify.get('/', async (req, res) => {
    console.log(req.params)
    res.send('OK')
  })

  done()
}

export default productsController
