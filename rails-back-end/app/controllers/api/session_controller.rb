class Api::SessionController < ApplicationController
  def create
   #if user = User.authenticate_with_credentials(params[:email], params[:password])
    email = params[:email].strip.downcase
    if user = User.find_by_email(email)
     # success logic, log them in
     session[:user_id] = user.id
   else
   # failure, create new user
     user = User.new
     user.email = email
     user.create!
     session[:user_id] = user.id
   end

 end

 def destroy
   session[:user_id] = nil
   redirect_to '/login'
 end
end
