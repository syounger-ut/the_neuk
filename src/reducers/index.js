import { combineReducers }   from 'redux'
import userReducer           from './userReducer'
import authenticationReducer from './authenticationReducer'
import messageReducer        from './messageReducer'

const allReducers = combineReducers({
  loggedIn: authenticationReducer,
  user:     userReducer,
  message:  messageReducer
})

export default allReducers
