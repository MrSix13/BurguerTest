import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Burgers from '../views/Burgers.vue'
import Practica from '../views/Practica.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hamburguesas',
    name: 'hamburguesas',
    component: Burgers
  },
  {
    path: '/practica/:id',
    name:'practica',
    component : Practica
  },
  {
    path:'/practica',
    name: 'detalle',
    component: ()=> import("../components/Detalle.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
