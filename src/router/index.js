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
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: () => import('@/views/WishList.vue')
  },
  {
    path: '/pupup',
    name: 'pupup',
    component: () => import('@/components/global/PupUop.vue')
  },
 {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/views/dashboard/DashboardLayout.vue'),
  meta: { hideHeaderFooter: true },
  children: [
    {
      path: '',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/Home.vue'),
      meta: { hideHeaderFooter: true }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/views/dashboard/Admin.vue'),
      meta: { hideHeaderFooter: true }
    },
    {
      path: '/add-product',
      name: 'Add Product',
      component: () => import('@/components/dashboard/AddProductForm.vue'),
      meta: { hideHeaderFooter: true }
    },
     {
      path: '/store-control',
      name: 'Store Control Center',
      component: () => import('@/views/dashboard/StorControl.vue'),
      meta: { hideHeaderFooter: true }
    },
   

  
  ]
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
