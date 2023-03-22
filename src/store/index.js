import { createStore } from 'vuex'
import { api } from '@/services/api'

export default createStore({
    state: {
        acomodacoes: [],
        user: [],
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
    },
    actions: {
        loadRooms: async ({ commit }) => {
            const response = await api.get('/acomodacoes')
            commit('loadRooms', response.data)
        },

        loadUser: async ({ commit }) => {
            const response = await api.get('/usuarios')
            commit('loadUser', response.data)
        },
    },
    modules: {},
})
