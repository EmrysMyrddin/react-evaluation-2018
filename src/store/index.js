import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as form } from 'redux-form'
import rules from './reducers/rules'
import filter from './reducers/filter'

const reducer = combineReducers({
  rules,
  filter,
  form,
})

const middlewares = [thunkMiddleware]

const enhancers = [
  applyMiddleware(...middlewares),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : []),
]

// use compose for multiple middlewares
const enhancer = compose(
  ...enhancers,
)

const store = createStore(reducer, enhancer)
export default store
