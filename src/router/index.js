import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Burgers from '../views/Burgers.vue'
import BurguerDetalle from '../views/BurguerDetalle.vue'
import BurguerAdd from '../views/BurguerAdd.vue'
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
    path: '/Burguer/:id',
    name:'BurguerDetalle',
    component : BurguerDetalle
  },
  {
    path:'/BurguerList',
    name: 'BurguerList',
    component: ()=> import("../components/BurguerList.vue")
  },
  {
    path:'/AddBurguer',
    name: 'AddBurguer',
    component: BurguerAdd
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
