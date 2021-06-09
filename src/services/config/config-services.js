import dotenv from 'dotenv'

const configServices = ({ env, logger }) => {
  const log = logger.child({ module: 'configServices' })

  const load = () => {
    const path = env ? `.${env}.env` : '.env'
    log.debug({ path }, 'loading config')

    const result = dotenv.config({ path })

    if (result.error) {
      if (result.error.code === 'ENOENT') {
        log.warn(`config file ${path} not found and will not be used`)
      } else throw result.error
    }
    log.debug({ path }, 'loading config ... DONE')
  }

  load()

  // eslint-disable-next-line security/detect-object-injection
  const get = (key) => process.env[key]

  return {
    get,
  }
}

export default configServices
