import config from '../Config/config'
import axios from 'axios'

const apiLogin = {
    login: async (username, password) => {
        let option = {
            url: config.apiLogin,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: username,
                password: password
            }
        }

        try {
            let result = await axios(option)

            return result

        } catch (error) {
            return error
        }
    }
}

export default apiLogin
