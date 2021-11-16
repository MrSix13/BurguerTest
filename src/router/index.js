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
    path: '/practica',
    name:'practica',
    component : Practica
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
