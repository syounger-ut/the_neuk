import { combineReducers }   from 'redux'
import usersReducer          from './usersReducer'
import authenticationReducer from './authenticationReducer'
import messageReducer        from './messageReducer'
import bookingsReducer       from './bookingsReducer'
import liveBookingReducer    from './liveBookingReducer'
import eventReducer          from './eventReducer'
import imagesReducer         from './imagesReducer'
import locationsReducer      from './locationsReducer'
import thingsToDoReducer     from './thingsToDoReducer'

const allReducers = combineReducers({
  currentUser: authenticationReducer,
  users:       usersReducer,
  message:     messageReducer,
  bookings:    bookingsReducer,
  liveBooking: liveBookingReducer,
  events:      eventReducer,
  images:      imagesReducer,
  locations:   locationsReducer,
  thingsToDo:  thingsToDoReducer
})

export default allReducers
