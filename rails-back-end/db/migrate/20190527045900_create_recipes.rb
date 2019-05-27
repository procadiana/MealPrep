class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :edeman_id
      t.string :main_ingredient
      t.timestamps
    end
  end
end
