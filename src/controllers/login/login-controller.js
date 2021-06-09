const loginController = async (fastify, _opts, done) => {
  const userServices = fastify.container.resolve('userServices')
  fastify.post('/', async (req, res) => {
    // const { email, password } = req.body
    console.log(req.body)
    res.send('ok')
  })
  done()
}

export default loginController
