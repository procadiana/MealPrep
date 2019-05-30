class Api::MealPlansController < ApplicationController
 BASE_URL = "https://api.edamam.com/search?"
 API_PARTIAL_URL = "app_id=#{ENV['KEY_API_ID']}" + "&" +"app_key=#{ENV['KEY_API_PASS']}"
 RECIPE_PARTIAL_URL = "r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_"

 def index
   mealplan = MealPlan.find(1);
   recipes = mealplan.recipes;
   ingredients = list_of_ingredients(recipes)
   render json: {
     mealplan: mealplan,
     recipes: recipes,
     ingredients: ingredients
   }
 end

 def show
   mealplan = MealPlan.find params[:id]
   recipes = mealplan.recipes;
   ingredients = list_of_ingredients(recipes)
     render json: {
       mealplan: mealplan,
       recipes: recipes,
       ingredients: ingredients
     }

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
 end


 private

 def list_of_ingredients (recipes)
   q_string = "#{BASE_URL}&#{API_PARTIAL_URL}"
   recipes.each { |r|
     q_string = q_string + "&" + RECIPE_PARTIAL_URL + r.edaman_id
   }
   puts q_string
   puts result = HTTParty.get(q_string)
   list = []
   result.each { |r|
     list = list + r["ingredientLines"]
   }
   return list
 end

end

