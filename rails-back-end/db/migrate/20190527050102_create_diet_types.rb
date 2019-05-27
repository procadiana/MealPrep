class CreateDietTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :diet_types do |t|
      t.string :name
      t.timestamps
    end
  end
end
