import { createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk]
 //Redux Dev-tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore( reducers, {}, composeEnhancers(applyMiddleware(...middlewares)))