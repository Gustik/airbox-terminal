import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/select-cell',
    name: 'SelectCell',
    component: () => import(/* webpackChunkName: "select-cell" */ '../views/SelectCell.vue')
  },
  {
    path: '/select-days/:id/:price',
    name: 'SelectDays',
    component: () => import(/* webpackChunkName: "select-cdays" */ '../views/SelectDays.vue')
  },
  {
    path: '/phone/:id/:price/:days',
    name: 'Phone',
    component: () => import(/* webpackChunkName: "phone" */ '../views/Phone.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
