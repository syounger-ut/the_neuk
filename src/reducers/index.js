import { combineReducers }   from 'redux'
import userReducer           from './userReducer'
import authenticationReducer from './authenticationReducer'

const allReducers = combineReducers({
  authentication: authenticationReducer,
  user: userReducer
})

export default allReducers
