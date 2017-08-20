class UserMailer < ApplicationMailer

  def welcome_email(user, password)
    @user     = user
    @password = password
    @url      = "http://thekamesneuk.com/login/?email=#{@user.email}&password=#{@password}"
    mail(to: @user.email, subject: 'Welcome to The Neuk')
  end

end
