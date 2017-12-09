import { combineReducers }   from 'redux'
import userReducer           from './userReducer'
import authenticationReducer from './authenticationReducer'

const allReducers = combineReducers({
  loggedIn: authenticationReducer,
  user: userReducer
})

export default allReducers
