import path from 'path'
import glob from 'glob'

const basePath =
  process.env.NODE_ENV === 'test'
    ? path.join(__dirname, '..', 'controllers')
    : path.join(__dirname, '..', 'src', 'controllers')
const routesPattern =
  process.platform === 'win32' ? `${basePath}\\*\\**\\*-controller.js` : `${basePath}/*/**/*-controller.js`

const generateRegex = (rootPath) => {
  /* eslint-disable security/detect-non-literal-regexp */
  const rex = `(${rootPath}/)(.*)(/.*-controller.js)`
  if (process.platform === 'win32') {
    return new RegExp(rex.replace(/\\/g, '/'))
  }
  return new RegExp(rex)
  /* eslint-enable security/detect-non-literal-regexp */
}

const getMatches = (pattern) =>
  new Promise((resolve, reject) => {
    glob(pattern, null, (err, matches) => {
      if (err) return reject(err)
      return resolve(matches)
    })
  })

const getControllers = async () => {
  const regex = generateRegex(basePath)

  const matches = await getMatches(routesPattern)
  return matches.map((match) => regex.exec(match)[2])
}

export default getControllers
