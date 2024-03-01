import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      alias: ['/', ''],
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/login/employee',
      alias: ['/', ''],
      component: () => import('@/views/EmployeeLoginPage.vue'),
    },
    {
      path: '/register',
      component: () => import('@/views/RegisterPage.vue'),
    },
    {
      path: '/branch',
      component: () => import('@/views/BranchPage.vue'),
    },
    {
      path: '/account',
      component: () => import('@/views/CustomerProfilePage.vue'),
      // meta: { requiresAuth: true },
      children: [
        {
          path: 'info',
          name: 'userInfo',
          component: () => import('@/components/profile/account-content/AccountContent.vue'),
        },
        {
          path: 'orders',
          name: 'myOrders',
          component: () => import('@/components/profile/account-content/OrderContent.vue'),
        },
        {
          path: 'coupons',
          name: 'myCoupons',
          component: () => import('@/components/profile/account-content/VoucherContent.vue'),
        },
        {
          path: 'addresses',
          name: 'myAddresses',
          component: () => import('@/components/profile/account-content/AddressContent.vue'),
        },
        {
          path: 'reviews',
          name: 'myReviews',
          component: () => import('@/components/profile/account-content/ReviewContent.vue'),
        },
      ],
    },
  ]
})

export default router
