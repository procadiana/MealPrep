class Api::MealPlansController < ApplicationController

  def index
    mealplan = MealPlan.find(1);
    recipes = mealplan.recipes;
    render json: {
      mealplan: mealplan,
      recipes: recipes
    }
  end
end
