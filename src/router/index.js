import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'add',
    component: () => import('../components/AddProduct')
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: () => import('../components/ViewProduct')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditProduct')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
