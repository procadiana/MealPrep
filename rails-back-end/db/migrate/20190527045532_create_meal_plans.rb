class CreateMealPlans < ActiveRecord::Migration[5.2]
  def change
    create_table :meal_plans do |t|
      t.integer :user_id
      t.integer :servings
      t.integer :days
      t.integer :diet_type_id
      t.timestamps
    end
  end
end
