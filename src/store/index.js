import { createStore } from 'vuex'
import { rooms } from '@/helpers/dataRooms'
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
            commit('loadRooms', acomodacoes)
        },
        loadUser({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
                commit('loadUser', response.data)
            })
        },
    },
    modules: {},
})
