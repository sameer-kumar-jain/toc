import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'

import productRoute from './productRoute'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
	childRoutes: [
    productRoute(store)
  ]
})
export default createRoutes
