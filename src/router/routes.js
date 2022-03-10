import AsyncLoader from './AsyncLoader'

const routes = [
  {
    path: '/',
    component: AsyncLoader(() => import('../pages/index'), [() => import('../pages/index/reducer.js'), () => import('../pages/mine/reducer.js')])
  },
  {
    path: '/mine',
    component: AsyncLoader(() => import('../pages/mine'), () => import('../pages/mine/reducer.js'))
  }
]

export default routes 
