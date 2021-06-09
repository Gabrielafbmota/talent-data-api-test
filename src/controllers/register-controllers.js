import getRoutes from './get-controllers'

const addRoutes = async (app, route) => {
  // eslint-disable-next-line extra-rules/no-commented-out-code
  const module = await import(/* webpackChunkName: "[request]" */ `./${route}/${route}-controller`)

  const prefix = route === 'home' ? null : `/${route}`
  app.register(module.default, { prefix })
  app.log.debug({ prefix: prefix || '/' }, 'controller added')
}

const registerControllers = async (app) => {
  const routesToRegister = await getRoutes()
  const addingRoutesPromises = routesToRegister.map((route) => addRoutes(app, route))
  await Promise.all(addingRoutesPromises)
}

export default registerControllers
