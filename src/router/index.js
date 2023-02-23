<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView";
import AboutView from "@/views/About/AboutView";
import RoomsView from "@/views/Rooms/RoomsView";
import BookView from "@/views/Book/BookView";
import ContactView from "@/views/Contact/ContactView";
import SignView from "@/views/Sign/SignView";
import RegisterView from "@/views/Register/RegisterView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: AboutView,
  },
  {
    path: "/acomodacoes",
    name: "acomodacoes",
    component: RoomsView,
  },
  {
    path: "/reservar",
    name: "reservar",
    component: BookView,
  },
  {
    path: "/contato",
    name: "contato",
    component: ContactView,
  },
  {
    path: "/acessar",
    name: "acessar",
    component: SignView,
  },
  {
    path: "/cadastrar",
    name: "cadastro",
    component: RegisterView,
  },
=======
import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AboutView from "../views/About/AboutView.vue";
import RoomsView from "../views/Rooms/RoomsView.vue";
import BookView from "../views/Book/BookView.vue";
import ContactView from "../views/Contact/ContactView.vue";
import SignView from "../views/Sign/SignView.vue";
import RegisterView from "../views/Register/RegisterView.vue";
<<<<<<< HEAD
import AvaliacaoHotelView from "../views/Avaliacao/AvaliacaoHotelView.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/sobre",
        name: "sobre",
        component: AboutView,
    },
    {
        path: "/acomodacoes",
        name: "acomodacoes",
        component: RoomsView,
    },
    {
        path: "/reservar",
        name: "reservar",
        component: BookView,
    },
    {
        path: "/contato",
        name: "contato",
        component: ContactView,
    },
    {
        path: "/acessar",
        name: "acessar",
        component: SignView,
    },
    {
        path: "/cadastrar",
        name: "cadastro",
        component: RegisterView,
    },
    {
        path: "/avaliacao",
        name: "avaliacao",
        component: AvaliacaoHotelView,
    },
>>>>>>> cc1590492a343c90b384ef1d7f2bf400b0d76cd0
=======
import DeluxeView from "../views/Feedback/DeluxeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: AboutView,
  },
  {
    path: "/acomodacoes",
    name: "acomodacoes",
    component: RoomsView,
  },
  {
    path: "/reservar",
    name: "reservar",
    component: BookView,
  },
  {
    path: "/contato",
    name: "contato",
    component: ContactView,
  },
  {
    path: "/acessar",
    name: "acessar",
    component: SignView,
  },
  {
    path: "/cadastrar",
    name: "cadastro",
    component: RegisterView,
  },
  {
    path: "/feedback",
    name: "feedback",
    component: DeluxeView,
  },
>>>>>>> 5680e0ea13fdc14deb4d9bac2aa5c27d0299b61e
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
