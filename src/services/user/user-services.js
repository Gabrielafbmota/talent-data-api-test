import file from '../../../fixtures/users.json'

const userServices = ({ logger }) => {
  async function getUser ({ email, password }) {
    return file.filter(item => {
      if (email === item.email && password === item.password) {
        return item
      }
    })
  }

  return {
    getUser,
  }
}

export default userServices
