const loginController = async (fastify, _opts, done) => {
  const userServices = fastify.container.resolve('userServices')
  fastify.post('/', async (req, res) => {
    const { email, password } = req.body
    const user = await userServices.getUser({ email, password })
    console.log(user)
    res.send(user)
  })
  done()
}

export default loginController
