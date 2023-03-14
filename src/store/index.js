import { createStore } from 'vuex'
import { acomodacoes } from '@/helpers/AcomodacaoData'
import axios from 'axios'

export default createStore({
    state: {
        acomodacoes: [],
        user: [],
        // rooms,
    },
    getters: {
        defaultRooms(state) {
            const teste = state.acomodacoes
            const teste2 = teste.list.filter(({ tipo }) => tipo === 'Quarto')
            return teste2
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
        // loadRooms({ commit }) {
        //     commit('loadRooms', acomodacoes)
        // },
        loadRooms({ commit }) {
            axios.get('http://localhost:4000/api/acomodacoes').then((response) => {
                commit('loadRooms', response.data)
            })
        },
        loadUser({ commit }) {
            axios.get('http://localhost:4000/api/usuarios').then((response) => {
                commit('loadUser', response.data)
            })
        },
    },
    modules: {},
})
