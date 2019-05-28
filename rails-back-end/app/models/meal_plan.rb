class MealPlan < ApplicationRecord
  belongs_to :user
  belongs_to :diet_type
  has_and_belongs_to_many :recipes
end
