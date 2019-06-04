class MealPlan < ApplicationRecord
  belongs_to :user
  belongs_to :diet_type
  has_and_belongs_to_many :recipes

  def recipes_json
    recipes.map do |recipe|
      recipe.attributes.merge(favorite: recipe.favorited_by?(user))
    end
  end
end
