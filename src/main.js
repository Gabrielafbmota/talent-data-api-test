import { createApi } from '../src/api'

const main = async () => {
  const api = await createApi()

  const port = process.env.PORT || 8080
  try {
    await api.listen(port, '0.0.0.0')
  } catch (error) {
    api.log.error(error)
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1)
  }
}

main()
