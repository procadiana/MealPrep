class CreateUsersFavoriteRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :users_favorite_recipes do |t|
      t.belongs_to :user, index: true
      t.belongs_to :recipe, index: true
      t.timestamps
    end
  end
end
