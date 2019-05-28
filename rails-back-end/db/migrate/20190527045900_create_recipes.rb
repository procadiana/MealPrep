class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :edaman_id
      t.string :main_ingredient
      t.string :img_source
      t.timestamps
    end
  end
end
