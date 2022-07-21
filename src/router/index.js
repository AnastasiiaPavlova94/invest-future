import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/invest-section',
    name: 'InvestSection',
    component: () => import('../views/InvestSection.vue')
  },
  {
    path: '/about-section',
    name: 'AboutSection',
    component: () => import('../views/AboutSection.vue')
  },
  {
    path: '/portfolio-section',
    name: 'PortfolioSection',
    component: () => import('../views/PortfolioSection.vue')
  },
  {
    path: '/service-section',
    name: 'ServiceSection',
    component: () => import('../views/ServiceSection.vue')
  },
  {
    path: '/contact-section',
    name: 'ContactSection',
    component: () => import('../views/ContactSection.vue')
  },
  {
    path: '/contact-section',
    name: 'ContactSection',
    component: () => import('../views/ContactSection.vue')
  },
  {
    path: '/blog-section',
    name: 'BlogSection',
    component: () => import('../components/BlogSection.vue')
  },
  {
    path: '/blog-card/:title',
    name: 'BlogCard',
    component: () => import('../components/BlogCard.vue')
  },
  {
    path: '/all-blog',
    name: 'AllBlog',
    component: () => import('../components/AllBlog.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'PageView404',
    component: () => import('../views/PageView404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(){
    return {
      top:0
    }
  },
})
export default router
