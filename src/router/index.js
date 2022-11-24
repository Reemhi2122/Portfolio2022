import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../components/ProjectsComponent.vue'
import Skills from '../components/SkillsComponent.vue'
import Contact from '../components/ContactComponent.vue'
import EmptyHome from '../components/EmptyHomeComponent.vue'
import ISC from '../components/ProjectComponents/ISCComponent.vue'
import COTF from '../components/ProjectComponents/COTFComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'emptyHome',
      component: EmptyHome
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/InSheepsClothing',
      name: 'ISC',
      component: ISC
    },
    {
      path: '/CryOfTheFox',
      name: 'COTF',
      component: COTF
    },
  ]
})

export default router
