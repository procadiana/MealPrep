class CreateRecipesAllergies < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes_allergies, id: false do |t|
      t.belongs_to :recipe, index: true
      t.belongs_to :allergy, index: true
      t.timestamps
    end
  end
end
