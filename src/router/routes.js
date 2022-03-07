import AsyncLoader from './AsyncLoader'

const routes = [
  {
    path: '/',
    component: AsyncLoader(() => import('../pages/index'), () => import('../store/index.js'))
  },
  {
    path: '/mine',
    component: AsyncLoader(() => import('../pages/mine'))
  }
]

export default routes 
