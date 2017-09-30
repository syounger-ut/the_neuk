class UserMailer < ApplicationMailer

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome to The Neuk')
  end

  def booking_email(user, booking)
    @user    = user
    @booking = booking
    mail(to: @user.email, subject: 'Your Neuk booking')
  end

end
