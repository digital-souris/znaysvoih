import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service')
  },
  {
    path: '/shop/:id',
    name: 'Product',
    component: () => import('../views/ProductItem')
  },
  {
    path: '/collection',
    name: 'Collections',
    component: () => import('../views/Collections')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
