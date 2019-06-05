class Recipe < ApplicationRecord
  has_and_belongs_to_many :meal_plans
  #has_and_belongs_to_many :users
  #has_and_belongs_to_many :allergies
  #has_and_belongs_to_many :diet_type

  has_many :users_favorite_recipes
  has_many :users, :through => :users_favorite_recipes

  has_many :recipes_diet_types
  has_many :diet_types, :through => :recipes_diet_types

  has_many :recipes_allergies
  has_many :allergies, :through => :recipes_allergies

  def favorited_by?(user)
    !!users.find_by(id: user.id)
  end
end
