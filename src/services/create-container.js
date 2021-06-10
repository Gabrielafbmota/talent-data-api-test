import pino from 'pino'

import configServices from './config/config-services'
import userServices from './user/user-services'
import organizationServices from './organization/organization-services'

import { createContainer as createAwilixContainer, asValue, asFunction } from 'awilix'

const makeLogger = ({ env }) => {
  if (env === 'development') return pino({ level: 'trace' })

  return pino(
    pino.destination({
      minLength: 4096,
      sync: false,
    })
  )
}

const createContainer = async ({ env }) => {
  const container = createAwilixContainer()
  container.register({
    env: asValue(env),
    logger: asFunction(makeLogger).singleton(),
    config: asFunction(configServices).singleton(),
    userServices: asFunction(userServices).singleton(),
    organizationServices: asFunction(organizationServices).singleton(),
  })

  return container
}

export default createContainer
