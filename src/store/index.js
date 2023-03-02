// import { createStore } from 'vuex'
// import { acomodacoesData } from '@/helpers/AcomodacaoData'

// export default createStore({
//     state: {
//         acomodacoes: [],
//         acomodacoesOnCart: [],
//         user: [],
//     },
//     getters: {
//         getQuarto(state) {
//             return state.acomodacoes.filter(({ destaque }) => destaque)
//         },
//     },
//     mutations: {
//         loadRooms(state, acomodacoesData) {
//             console.log(state, acomodacoesData)
//             state.acomodacoes = acomodacoesData
//         },
//         loadCart(state, acomodacoesOnCart) {
//             state.acomodacoesOnCart = acomodacoesOnCart
//         },
//         addToCart(state, quarto) {
//             state.acomodacoesOnCart = Object.assign(quarto)
//         },

//     },
//     actions: {
//         loadRooms({ commit }) {
//             commit('loadRooms', acomodacoesData)
//         },

//         loadCart({ commit }) {
//             commit('loadCart')
//         },
//         addToCart({ commit }, quarto) {
//             commit('addToCart', quarto)
//         },
//         loadUser({ commit }) {
//             axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
//                 commit('loadUser', response.data)
//             })
//         },

//         modules: {},
//     },
// })
