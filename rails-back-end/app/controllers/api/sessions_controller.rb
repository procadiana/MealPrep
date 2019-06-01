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
     puts "No such user found, creating new user"
     user = User.new
     user.email = email
     user.save!
     session[:user_id] = user.id
     puts session.inspect

   end
   puts "#{user} Loged in !!"
   render json: {
      authenticated: true,
      user: user
      }
 end

 def destroy
   session[:user_id] = nil
   render json: {
       authenticated: false
      }
 end

 def logedin
    puts "the user loged in is #{session.inspect}"
    authenticated = false
    user = current_user
    if user
      authenticated = true
    end
    # user = current_user
    # user ? authenticated = true : autenticated = false
    puts "authenticated: #{authenticated}"
    puts "user: #{user.inspect}"

    render json: {
       authenticated: authenticated,
       user: user
      }
 end
end
