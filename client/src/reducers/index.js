import { combineReducers } from 'redux'
import auth from './auth_reducer'
import task from './task_reducer'
export default combineReducers({
    auth,
    task
})