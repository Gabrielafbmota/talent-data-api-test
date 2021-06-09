const homeController = async (fastify, _opts, done) => {
  fastify.get('/', async (req, res) => {
    res.send('Service Online')
  })
  done()
}

export default homeController
