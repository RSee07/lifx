import { combineReducers } from 'redux'
import lightReducer from './lightReducer'

const rootReducer = combineReducers({
  light: lightReducer,
})

export default rootReducer
