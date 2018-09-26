import { combineReducers }   from 'redux'
import usersReducer          from './usersReducer'
import authenticationReducer from './authenticationReducer'
import messageReducer        from './messageReducer'
import bookingReducer        from './bookingReducer'
import eventReducer          from './eventReducer'
import imagesReducer         from './imagesReducer'
import locationsReducer      from './locationsReducer'
import thingsToDoReducer     from './thingsToDoReducer'

const allReducers = combineReducers({
  currentUser: authenticationReducer,
  users:       usersReducer,
  message:     messageReducer,
  booking:     bookingReducer,
  events:      eventReducer,
  images:      imagesReducer,
  locations:   locationsReducer,
  thingsToDo:  thingsToDoReducer
})

export default allReducers
