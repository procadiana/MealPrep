class RecipesAllergy < ApplicationRecord
  belongs_to :recipe
  belongs_to :allergy
end
