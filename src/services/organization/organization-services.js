import organizations from '../../../fixtures/organization.json'
const organizationServices = ({ logger }) => {
  const log = logger.child({ module: 'organizationServices' })
  async function organization (organizationName, level) {
    return organizations.filter(item => item.name === organization && item.level === level)
  }

  return { organization }
}

export default organizationServices
