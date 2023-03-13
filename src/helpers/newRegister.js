import axios from 'axios'

export default {
    name: newRegister,

    methods: {
        register() {
            return axios.post(('http://localhost:3000/todos', newUser))
        },
    },
}
