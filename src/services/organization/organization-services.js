import organizations from '../../../fixtures/organization.json'
const organizationServices = ({ logger }) => {
  const log = logger.child({ module: 'organizationServices' })
  async function organization (organizationName, level) {
    return organizations.filter(item => item.name === organizationName && level.includes(item.level))
  }

  return { organization }
}

export default organizationServices
