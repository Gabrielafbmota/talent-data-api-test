import file from '../../../fixtures/users.json'

const userServices = ({ logger }) => {
  const roles = {
    junior: {

      level: [2],
    },
    middle: {
      level: [1, 2],
    },
    senior: {
      level: [0, 1, 2],
    },
    intern: {
      level: [0, 1, 2],
    },
  }
  async function getUser ({ email, password }) {
    return file.filter(item => email === item.email && password === item.password)
  }
  async function getLevel ({ role }) {
    return roles[role]
  }
  return {
    getUser,
    getLevel,
  }
}

export default userServices
