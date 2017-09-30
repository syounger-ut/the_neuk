class UserMailer < ApplicationMailer

  def welcome_email(user, booking)
    @user     = user
    @booking  = booking
    @url      = "http://thekamesneuk.com/login/?email=#{@user.email}"
    mail(to: @user.email, subject: 'Welcome to The Neuk')
  end

end
