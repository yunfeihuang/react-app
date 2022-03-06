import AsyncLoader from './AsyncLoader'

const routes = [
  {
    path: '/',
    component: AsyncLoader(() => import('../pages/index'), () => import('../reducer/index.js'))
  }
]

export default routes 
