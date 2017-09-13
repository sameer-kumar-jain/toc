import React  from 'react'
import { injectReducer } from '../store/reducers'

const fields = require('../components/fields/product').default

export default (store) => ({
  path : 'product',
	childRoutes : [
		{
			path:'list',
			getComponent (nextState, cb) {
				require.ensure([], (require) => {
					const List = require('../containers/List').default
					const reducer = require('../reducers/entity').default
					injectReducer(store, { key: 'product', reducer })
					store.dispatch(require('../reducers/entity').loadItemList('product'))
					cb(null, List)
				}, 'product')
			},
		},{
			path:'create',
			getComponent (nextState, cb) {
				require.ensure([], (require) => {
					const Create = require('../containers/Create').default
					const reducer = require('../reducers/entity').default
					injectReducer(store, { key: 'product', reducer })
					cb(null, props => <Create {...props} fields={fields} store={store} />)
				}, 'product')
			},
		},{
			path:':id/edit',
			getComponent (nextState, cb) {
				require.ensure([], (require) => {
					const Edit = require('../containers/Edit').default
					const reducer = require('../reducers/entity').default
					store.dispatch(require('../reducers/entity').loadItemData('product',nextState.params.id))
					injectReducer(store, { key: 'product', reducer })
					cb(null, props => <Edit {...props} fields={fields}  />)
				}, 'product')
			},
		},{
			path:':id/delete',
			getComponent (nextState, cb) {
				require.ensure([], (require) => {
					const Delete = require('../containers/Delete').default
					const reducer = require('../reducers/entity').default
					store.dispatch(require('../reducers/entity').loadItemData('product',nextState.params.id))
					injectReducer(store, { key: 'product', reducer })
					cb(null, props => <Delete {...props} />)
				}, 'product')
			},
		},{
			path:':id/calculate',
			getComponent (nextState, cb) {
				require.ensure([], (require) => {
					const Calculate = require('../containers/Calculate').default
					const reducer = require('../reducers/entity').default
					store.dispatch(require('../reducers/entity').loadItemData('product',nextState.params.id))
					injectReducer(store, { key: 'product', reducer })
					cb(null, props => <Calculate {...props} />)
				}, 'product')
			},
		}
  ]
})
