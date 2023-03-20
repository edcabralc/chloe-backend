import { createStore } from 'vuex'
import { api } from '@/services/api'

export default createStore({
    state: {
        acomodacoes: [],
        user: {},
        // rooms,
    },
    getters: {
        acomodacoesPadrao(state) {
            const { list } = state.acomodacoes
            return list.filter(({ tipo }) => tipo === 'Quarto')
        },
    },
    mutations: {
        loadRooms(state, acomodacoes) {
            state.acomodacoes = acomodacoes
        },
        loadUser(state, user) {
            state.user = user
        },
        createUser(state, user) {
            state.user = user
        },
    },
    actions: {
        loadRooms: async ({ commit }) => {
            const response = await api.get('/acomodacoes')
            commit('loadRooms', response.data)
        },

        loadUser: async ({ commit }) => {
            const response = await api.post('/usuarios')
            commit('loadUser', response.data)
        },
        createUser: async ({ state }) => {
            try {
                const response = await api.post('/usuario/registrar', state.user)
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        },

        // createUser: async ({ commit }) => {
        //     const response = await http.post('/usuario/registrar')
        //     commit('createUser', response.data)
        // },
    },
    modules: {},
})
