const loginController = async (fastify, _opts, done) => {
  const userServices = fastify.container.resolve('userServices')
  fastify.post('/', async (req, res) => {
    const { email, password } = req.body
    const [user] = await userServices.getUser({ email, password })
    const token = await fastify.jwt.sign({ id: user.userId, role: user.roles.join() })
    res.send({ token })
  })
  done()
}

export default loginController
