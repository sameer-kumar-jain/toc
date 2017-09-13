import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createStore from './store/createStore'

const store = createStore()
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./components/App').default
  const routes = require('./routes/index').default(store)
  ReactDOM.render(
    <App store={store} routes={routes} />,MOUNT_NODE
  )
}
render()