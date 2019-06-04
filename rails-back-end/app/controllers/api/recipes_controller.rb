class Api::RecipesController < ApplicationController


  def index
    user = current_user
    if user
      recipes = user.recipes
      render json: {
        recipes: recipes  #array of recipes
      }
    end
  end


  def favorite
    puts params[:recipe_id]
    puts session[:user_id]
    if current_user
      ur = UsersFavoriteRecipe.find_by(user_id: session[:user_id], recipe_id: params[:recipe_id])
      puts "UsersFavoriteRecipe #{ur}"
      if ur == nil
        ur = UsersFavoriteRecipe.new
        ur.user_id = session[:user_id]
        ur.recipe_id = params[:recipe_id]
        ur.save!
        favorite = true
      else
        ur.delete
        puts "The recipe is not your favorite anymore"
        favorite = false
      end
      render json: {
          favorite: favorite
        }
    end
  end

  def isfavorite
    puts params
    puts session[:user_id]
    if current_user
      ur = UsersFavoriteRecipe.find_by(user_id: session[:user_id], recipe_id: params[:id])
      ur ? favorite = true : favorite = false
    end
    render json: {
          favorite: favorite
        }
  end
end
