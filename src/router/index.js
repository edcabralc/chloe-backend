
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

import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AboutView from "../views/About/AboutView.vue";
import RoomsView from "../views/Rooms/RoomsView.vue";
import BookView from "../views/Book/BookView.vue";
import ContactView from "../views/Contact/ContactView.vue";
import SignView from "../views/Sign/SignView.vue";
import RegisterView from "../views/Register/RegisterView.vue";
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
import DeluxeView from "../views/Feedback/DeluxeView.vue";

import FeedbackView from "@/views/Feedback/FeedbackView";
import MainHeader from "@/components/commons/MainHeader";
import MainFooter from "@/components/commons/MainFooter";


const routes = [
  {
    path: "/",
    name: "home",
    components: {
      header: MainHeader,
      mainpage: HomeView,
      footer: MainFooter,
    },
  },
  {
    path: "/sobre",
    name: "sobre",
    components: {
      header: MainHeader,
      mainpage: AboutView,
      footer: MainFooter,
    },
  },
  {
    path: "/acomodacoes",
    name: "acomodacoes",
    components: {
      header: MainHeader,
      mainpage: RoomsView,
      footer: MainFooter,
    },
  },
  {
    path: "/reservar",
    name: "reservar",
    components: {
      header: MainHeader,
      mainpage: BookView,
      footer: MainFooter,
    },
  },
  {
    path: "/contato",
    name: "contato",
    components: {
      header: MainHeader,
      mainpage: ContactView,
      footer: MainFooter,
    },
  },
  {
    path: "/feedback",
    name: "feedback",
    components: {
      header: MainHeader,
      mainpage: FeedbackView,
      footer: MainFooter,
    },
  },
  {
    path: "/acessar",
    name: "acessar",
    components: {
      login: SignView,
    },
  },
  {
    path: "/cadastrar",
    name: "cadastro",
    components: {
      header: MainHeader,
      mainpage: RegisterView,
      footer: MainFooter,
    },
  },

  {
    path: "/feedback",
    name: "feedback",
    component: DeluxeView,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
