import { combineReducers }   from 'redux'
import usersReducer          from './usersReducer'
import authenticationReducer from './authenticationReducer'
import messageReducer        from './messageReducer'
import bookingReducer        from './bookingReducer'
import eventReducer          from './eventReducer'
import imagesReducer         from './imagesReducer'
import locationsReducer      from './locationsReducer'

const allReducers = combineReducers({
  currentUser: authenticationReducer,
  users:       usersReducer,
  message:     messageReducer,
  booking:     bookingReducer,
  events:      eventReducer,
  images:      imagesReducer,
  locations:   locationsReducer
})

export default allReducers
