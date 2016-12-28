import { createStore } from 'redux'
import reducer from './reducer'

const configureStore = (initialstate) =>
  createStore(reducer, initialstate)

export default configureStore
