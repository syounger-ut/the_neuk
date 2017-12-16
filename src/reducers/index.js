import { combineReducers }   from 'redux'
import userReducer           from './userReducer'
import authenticationReducer from './authenticationReducer'
import messageReducer        from './messageReducer'
import bookingReducer        from './bookingReducer'

const allReducers = combineReducers({
  loggedIn: authenticationReducer,
  user:     userReducer,
  message:  messageReducer,
  booking:  bookingReducer
})

export default allReducers
