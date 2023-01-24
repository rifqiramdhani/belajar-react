import config from '../Config/config'
import axios from 'axios'

const apiUsers = {
    getUser: async (token) => {
        let option = {
            url: config.apiUsers,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : token
            },
        }

        try {
            let result = await axios(option)

            return result

        } catch (error) {
            return error
        }
    }
}

export default apiUsers
