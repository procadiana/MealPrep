class Api::RecipesController < ApplicationController
  # def update
  #   puts params[:id]
  #   puts session
  #   user = current_user
  #   if user
  #     ur = UsersFavoriteRecipe.new
  #     ur.user_id = session[:user_id]
  #     ur.recipe_id = params[:recipe_id]
  #     ur.save!
  #     puts ur
  #   end
  # end

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
    puts params
    puts session[:user_id]
    if current_user
      ur = UsersFavoriteRecipe.new
      ur.user_id = session[:user_id]
      ur.recipe_id = params[:recipe_id]
      ur.save!
    end
  end

  def destroy
    puts params
    puts session[:user_id]
    if current_user
      ur = UsersFavoriteRecipe.find_by(user_id: session[:user_id], recipe_id: params[:id])
      puts ur
      ur.delete
    end
  end
end
