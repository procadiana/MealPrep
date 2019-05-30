class DietType < ApplicationRecord
  #has_and_belongs_to_many :recipes
  has_many :meal_plans

  has_many :recipes_diet_types
  has_many :recipes, :through => :recipes_diet_types
end
