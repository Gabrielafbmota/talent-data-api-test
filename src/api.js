import Fastify from 'fastify'
import helmet from 'fastify-helmet'
import compress from 'fastify-compress'
import underPressure from 'under-pressure'

import sensible from 'fastify-sensible'
import registerControllers from './controllers/register-controllers'
import createContainer from './services/create-container'

const createApi = async (options = {}) => {
  const container = options.container || await createContainer({ env: __ENV__ })
  const logger = options.logger || container.resolve('logger')
  const config = container.resolve('config')
  const api = Fastify({ ...options, logger })

  api.addHook('onClose', async (_instance, done) => {
    await container.dispose()
    done()
  })
  api.register(require('fastify-jwt'), {
    secret: config.get('JWT_SECRET'),
  })

  api.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify()
    } catch (error) {
      reply.send(error)
    }
  })

  api.register(sensible)
  api.decorate('container', container)

  api.register(require('fastify-cors'), {
    origin: '*',
  })

  await registerControllers(api)

  api.register(underPressure, {
    exposeStatusRoute: true,
  })

  api.register(helmet)
  api.register(compress, { global: false })
  return api
}

export { createApi }
