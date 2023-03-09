import { createStore } from 'vuex'
import { acomodacoes } from '@/helpers/AcomodacaoData'
import axios from 'axios'

export default createStore({
    state: {
        acomodacoes: [],
        user: [],
        // rooms,
    },
    getters: {},
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
