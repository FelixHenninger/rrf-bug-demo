import { createStore } from 'redux'
import reducer from './reducer'

const configureStore = (initialstate) =>
  createStore(
    reducer, initialstate,
    window.devToolsExtension && window.devToolsExtension()
  )

export default configureStore
