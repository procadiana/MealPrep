class Api::MealPlansController < ApplicationController

  def index
    mealplan = MealPlan.find(1);
    recipes = mealplan.recipes;
    render json: {
      mealplan: mealplan,
      recipes: recipes
    }
  end

  def show
    mealplan = MealPlan.find params[:id]
      recipes = mealplan.recipes;
      render json: {
        mealplan: mealplan,
        recipes: recipes
      }
    #   render json: {
    #   message: "This Meal Plan does not exist"
    # }
  end


  def create
    puts params
    #raise "Yay, I'm here!"
    recipes = Recipe.take(params[:days])
    user = User.first
    diet_type = DietType.find_by(name: params[:diet])
    mealplan = MealPlan.new
    mealplan.user = user
    mealplan.recipes = recipes
    mealplan.diet_type = diet_type
    mealplan.servings = params[:servings]
    mealplan.days = params[:days]
    mealplan.save!
    puts "The new mealplan id #{mealplan.id}"
    render json: {
        mealplan: mealplan,
        recipes: recipes
      }


    # @product = Product.find(params[:product_id])
    # @review = @product.reviews.new(allowed_params)
    # @review.user = current_user
    # @review.save!
    # redirect_to product_path(@product)
  end
end
