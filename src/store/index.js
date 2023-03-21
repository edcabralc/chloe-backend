import { createStore } from 'vuex'
import { api } from '@/services/api'

export default createStore({
    state: {
        acomodacoes: [],
        user: {
            nome_usuario: '',
            email_usuario: '',
            password: '',
        },
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

        updateUser(state, payload) {
            state.user = Object.assign(state.user, payload)
        },
    },
    actions: {
        loadRooms: async ({ commit }) => {
            const { data } = await api.get('/acomodacoes')
            commit('loadRooms', data)
        },

        loadUser: async ({ commit }) => {
            const { data } = await api.post('/usuarios')
            commit('loadUser', data)
        },
        createUser: async (_, payload) => {
            api.post('/usuario/registrar', payload)
        },
    },
    modules: {},
})
