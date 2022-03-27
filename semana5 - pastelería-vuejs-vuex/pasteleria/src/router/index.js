import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomePasteleriaView.vue'

const routes = [
  {
    path: '/',
    name: 'pasteleria',
    component: HomeView
  },
  {
    path: '/administrador',
    name: 'aministrador',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
