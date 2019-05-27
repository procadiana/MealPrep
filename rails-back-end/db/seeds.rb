# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# Let's do this ...
puts "Deleting tables"
User.delete_all
DietType.delete_all
MealPlan.delete_all
Recipe.delete_all
MealPlanRecipe.delete_all

puts "Tables deleted"

user1 = User.create! name: 'karina', email: 'karina@gmail.com'



diet_t = DietType.create! name: 'traditional'
diet_v = DietType.create! name: 'vegetarian'
diet_k = DietType.create! name: 'keto'
diet_l = DietType.create! name: 'low-carb'




meal_plan1 = MealPlan.create! user: user1, servings: 2, diet_type: diet_t



recipe1 = Recipe.create! name: 'Chicken Vesuvio', edeman_id: 'b79327d05b8e5b838ad6cfd9576b30b6', main_ingredient: 'chicken', img_source: 'https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg'
recipe2 = Recipe.create! name: 'Chicken Paprikash', edeman_id: '8275bb28647abcedef0baaf2dcf34f8b', main_ingredient: 'chicken', img_source:'https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg'
recipe3 = Recipe.create! name: 'Catalan Chicken', edeman_id: '2463f2482609d7a471dbbf3b268bd956', main_ingredient: 'chicken', img_source:'https://www.edamam.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg'
recipe4 = Recipe.create! name: 'Persian Chicken', edeman_id: '4caf01683bf99ddc7c08c35774aae54c', main_ingredient: 'chicken', img_source:'https://www.edamam.com/web-img/bd4/bd47ac0557ade02871750518d56ba928.jpg'



MealPlanRecipe.create! meal_plan: meal_plan1, recipe: recipe1
MealPlanRecipe.create! meal_plan: meal_plan1, recipe: recipe2
MealPlanRecipe.create! meal_plan: meal_plan1, recipe: recipe3
MealPlanRecipe.create! meal_plan: meal_plan1, recipe: recipe4

puts "DONE!"
