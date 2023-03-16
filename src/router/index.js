import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView'
import AboutView from '@/views/About/AboutView'
import RoomsView from '@/views/Rooms/RoomsView'
import BookView from '@/views/Book/BookView'
import ContactView from '@/views/Contact/ContactView'
import SignView from '@/views/Sign/SignView'
import DashboardView from '@/views/Dashboard/DashboardView'
import RegisterView from '@/views/Register/RegisterView'
import FeedbackView from '@/views/Feedback/FeedbackView'
import MainHeader from '@/components/commons/MainHeader'
import MainFooter from '@/components/commons/MainFooter'
import TesteView from '@/views/Teste/TesteView'
import TestAcomodacoes from '@/views/Dashboard/Acomodacoes/TestAcomodacoes'

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            header: MainHeader,
            mainpage: HomeView,
            footer: MainFooter,
        },
    },
    {
        path: '/sobre',
        name: 'sobre',
        components: {
            header: MainHeader,
            mainpage: AboutView,
            footer: MainFooter,
        },
    },
    {
        path: '/acomodacoes',
        name: 'acomodacoes',
        components: {
            header: MainHeader,
            mainpage: RoomsView,
            footer: MainFooter,
        },
    },
    {
        path: '/reservar',
        name: 'reservar',
        components: {
            header: MainHeader,
            mainpage: BookView,
            footer: MainFooter,
        },
    },
    {
        path: '/contato',
        name: 'contato',
        components: {
            header: MainHeader,
            mainpage: ContactView,
            footer: MainFooter,
        },
    },
    {
        path: '/avaliacoes',
        name: 'avaliacoes',
        components: {
            header: MainHeader,
            mainpage: FeedbackView,
            footer: MainFooter,
        },
    },
    {
        path: '/acessar',
        name: 'acessar',
        components: {
            login: SignView,
        },
    },
    {
        path: '/cadastrar',
        name: 'cadastro',
        components: {
            header: MainHeader,
            mainpage: RegisterView,
            footer: MainFooter,
        },
    },
    {
        path: '/painel',
        name: 'painel',
        components: {
            painel: DashboardView,
        },
        children: [
            {
                path: 'usuarios',
                name: 'usuarios',
                component: TesteView,
            },
            {
                path: 'acomodacoes',
                name: 'acomodacoes',
                component: TestAcomodacoes,
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
