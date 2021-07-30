import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import(/* webpackChunkName: "about" */ '../views/Partners.vue')
  },
  {
    path: '/whatistbi',
    name: 'WhatisTBI',
    component: () => import(/* webpackChunkName: "whatistbi" */ '../views/WhatIsTBI.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
