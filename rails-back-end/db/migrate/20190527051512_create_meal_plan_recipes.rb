class CreateMealPlanRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :meal_plan_recipes do |t|
      t.belongs_to :meal_plan, index: true
      t.belongs_to :recipe, index: true
      t.timestamps
    end
  end
end
