class UserMailer < ApplicationMailer

  def welcome_email(user, password)
    @user     = user
    @url      = "http://thekamesneuk.com/login/?email=#{@user.email}&password=#{password}"
    mail(to: @user.email, subject: 'Welcome to The Neuk')
  end

end
