class RecipesDietType < ApplicationRecord
  belongs_to :recipe
  belongs_to :diet_type
end
