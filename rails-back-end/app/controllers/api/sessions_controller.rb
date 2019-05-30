class Api::SessionsController < ApplicationController
  def create
   #if user = User.authenticate_with_credentials(params[:email], params[:password])
    email = params[:email].strip.downcase
    puts "Login in ... #{email}"
    if user = User.find_by_email(email)
     # success logic, log them in
     session[:user_id] = user.id
     #response.set_cookie "user_id", "testCookie"
     puts session
   else
   # failure, create new user
     user = User.new
     user.email = email
     user.save!
     session[:user_id] = user.id
     puts session
   end
   puts "Loged in !!"
 end

 def destroy
   session[:user_id] = nil
   #redirect_to '/login'
 end
end
