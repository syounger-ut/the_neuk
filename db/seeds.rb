user = User.create({
  first_name:   "Sam",
  last_name:    "Younger",
  email:        "sam@sam.com",
  password:     "password",
  phone_number: "07564738291",
  role:         "admin"
})

user.bookings.create({
  start_date:     Date.yesterday - 5.days,
  end_date:       Date.today,
  occupants:      5,
  booking_source: "air_bnb"
})
