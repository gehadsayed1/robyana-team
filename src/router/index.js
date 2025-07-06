import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/categories', 
    name: 'categories',
    component: () => import('@/views/Categories.vue')
  },
    {
    path: '/login', 
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
   {
    path: '/category', 
    name: 'category',
    component: () => import('@/views/Products.vue')
  },
    {
    path: '/product-details', 
    name: 'product-details',
    component: () => import('@/views/ProductDetails.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
