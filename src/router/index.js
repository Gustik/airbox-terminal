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
    path: '/select-days',
    name: 'SelectDays',
    component: () => import(/* webpackChunkName: "select-cdays" */ '../views/SelectDays.vue')
  },
  {
    path: '/phone',
    name: 'Phone',
    component: () => import(/* webpackChunkName: "phone" */ '../views/Phone.vue')
  },
  {
    path: '/pay-method',
    name: 'PayMethod',
    component: () => import(/* webpackChunkName: "pay-method" */ '../views/PayMethod.vue')
  },
  {
    path: '/pay-card',
    name: 'PayCard',
    component: () => import(/* webpackChunkName: "pay-card" */ '../views/PayCard.vue')
  },
  {
    path: '/pay-cash',
    name: 'PayCash',
    component: () => import(/* webpackChunkName: "pay-cash" */ '../views/PayCash.vue')
  },
  {
    path: '/baggage-claim',
    name: 'BaggageClaim',
    component: () => import(/* webpackChunkName: "baggage-claim" */ '../views/BaggageClaim.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
