class CreateRecipesDietTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes_diet_types, id: false do |t|
      t.belongs_to :recipe, index: true
      t.belongs_to :diet_type, index: true
      t.timestamps
    end
  end
end
