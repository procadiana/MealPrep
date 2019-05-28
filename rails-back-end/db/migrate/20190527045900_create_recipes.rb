class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :edaman_id
      t.string :main_ingredient
      t.string :shareAs
      t.string :img_source
      t.integer :servings
      t.timestamps
    end
  end
end
