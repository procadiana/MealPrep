class Allergy < ApplicationRecord
  has_and_belongs_to_many :users
  #has_and_belongs_to_many :recipes

  has_many :recipes_allergies
  has_many :recipes, :through => :recipes_allergies
end
