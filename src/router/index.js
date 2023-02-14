import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../components/ProjectsComponent.vue'
import Skills from '../components/SkillsComponent.vue'
import Contact from '../components/ContactComponent.vue'
import EmptyHome from '../components/EmptyHomeComponent.vue'
import MobileNav from '../components/MobileNavComponent.vue'
import ISCComponent from '../components/ProjectComponents/ISCComponent.vue'
import COTFComponent from '../components/ProjectComponents/COTFComponent.vue'
import DescentComponent from '../components/ProjectComponents/DescentComponent.vue'
import InProgress from '../components/ProjectComponents/InProgressComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'emptyHome',
      component: EmptyHome
    },
    {
      path: '/MobileNav',
      name: 'mobileNav',
      component: MobileNav
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
      path: '/about',
      name: 'about',
      component: Contact
    },
    {
      path: '/InSheepsClothing',
      name: 'ISC',
      component: ISCComponent
    },
    {
      path: '/CryOfTheFox',
      name: 'COTF',
      component: COTFComponent
    },
    {
      path: '/DescentRaytraced',
      name: 'DR',
      component: DescentComponent
    },
    {
      path: '/GudenuffEngine',
      name: 'GE',
      component: InProgress
    },
    {
      path: '/DonutDrifters',
      name: 'DD',
      component: InProgress
    }
  ]
})

export default router
