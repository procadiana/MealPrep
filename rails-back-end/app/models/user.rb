class User < ApplicationRecord
  #has_and_belongs_to_many :recipes
  has_and_belongs_to_many :allergies

  has_many :users_favorite_recipes
  has_many :recipes, :through => :users_favorite_recipes
end
