import { createApi } from '../src/api'
import minimist from 'minimist'
const main = async () => {
  const api = await createApi()

  const argv = minimist(process.argv.slice(2))
  const port = process.env.PORT || argv.port || argv.PORT || 3000
  try {
    await api.listen(port, '0.0.0.0')
  } catch (error) {
    api.log.error(error)
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1)
  }
}

main()
