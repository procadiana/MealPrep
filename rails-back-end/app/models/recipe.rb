class Recipe < ApplicationRecord
  has_and_belongs_to_many :meal_plans
  has_and_belongs_to_many :users
end
