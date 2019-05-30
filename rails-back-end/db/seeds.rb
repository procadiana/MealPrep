# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# Let's do this ...
puts "Deleting tables..."
User.delete_all
DietType.delete_all
MealPlan.delete_all
Recipe.delete_all
MealPlansRecipe.delete_all
Allergy.delete_all

puts "Tables deleted"

puts "Seeding Data ..."

user1 = User.create! name: 'karina', email: 'karina@gmail.com'



diet_t = DietType.create! name: 'Traditional'
diet_v = DietType.create! name: 'Vegetarian'
diet_k = DietType.create! name: 'Keto'
diet_l = DietType.create! name: 'Paleo'
diet_p = DietType.create! name: 'Pescaterian'

allergy_d = Allergy.create! name: 'dairy-free'
allergy_n = Allergy.create! name: 'tree-nut-free'
allergy_g = Allergy.create! name: 'gluten-free'
allergy_e = Allergy.create! name: 'egg-free'
allergy_f = Allergy.create! name: 'fish-free'
allergy_w = Allergy.create! name: 'wheat-free'
allergy_p = Allergy.create! name: 'peanut-free'





meal_plan1 = MealPlan.create! user: user1, servings: 4, diet_type: diet_t, days: 4



recipe1 = Recipe.create! name: 'Chicken Vesuvio', edaman_id: 'b79327d05b8e5b838ad6cfd9576b30b6', main_ingredient: 'chicken', servings: 4, img_source: 'https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg', shareAs: 'http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken'
recipe2 = Recipe.create! name: 'Chicken Paprikash', edaman_id: '8275bb28647abcedef0baaf2dcf34f8b', main_ingredient: 'chicken', servings: 4, img_source:'https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg',shareAs: 'http://www.edamam.com/recipe/chicken-paprikash-8275bb28647abcedef0baaf2dcf34f8b/chicken'
recipe3 = Recipe.create! name: 'Catalan Chicken', edaman_id: '2463f2482609d7a471dbbf3b268bd956', main_ingredient: 'chicken', servings: 12, img_source: 'https://www.edamam.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg',shareAs: 'http://www.edamam.com/recipe/catalan-chicken-2463f2482609d7a471dbbf3b268bd956/chicken'
recipe4 = Recipe.create! name: 'Persian Chicken', edaman_id: '4caf01683bf99ddc7c08c35774aae54c', main_ingredient: 'chicken', servings: 5, img_source:'https://www.edamam.com/web-img/bd4/bd47ac0557ade02871750518d56ba928.jpg', shareAs: 'http://www.edamam.com/recipe/persian-chicken-4caf01683bf99ddc7c08c35774aae54c/chicken'
recipe5 = Recipe.create! name: 'Portabello Beef Stew', edaman_id: '14c68e61108cc0829ee6ef279f79b860', main_ingredient: 'beef', servings: 3, img_source:'https://www.edamam.com/web-img/72f/72fd32d089fdc211a0b35a7e41ed47e2.JPG', shareAs: 'http://www.edamam.com/recipe/portabello-beef-stew-14c68e61108cc0829ee6ef279f79b860/beef'
recipe6 = Recipe.create! name: 'Warm and Nutty Cinnamon Quinoa Recipe', edaman_id: '70386282c8bbc742149df16aff4e089e', main_ingredient: 'quinoa', servings: 4, img_source:'https://www.edamam.com/web-img/862/86252014c2ef25dd041d6b052c1bc122.jpg', shareAs: 'http://www.edamam.com/recipe/warm-and-nutty-cinnamon-quinoa-recipe-70386282c8bbc742149df16aff4e089e/quinoa'




MealPlansRecipe.create! meal_plan: meal_plan1, recipe: recipe1
MealPlansRecipe.create! meal_plan: meal_plan1, recipe: recipe2
MealPlansRecipe.create! meal_plan: meal_plan1, recipe: recipe3
MealPlansRecipe.create! meal_plan: meal_plan1, recipe: recipe4
MealPlansRecipe.create! meal_plan: meal_plan1, recipe: recipe5


RecipesAllergy.create! recipe: recipe6, allergy: allergy_p

RecipesDietType.create! recipe: recipe6, diet_type: diet_v

UsersFavoriteRecipe.create! user: user1, recipe: recipe1
UsersFavoriteRecipe.create! user: user1, recipe: recipe2

puts "Data seeded. DONE!"
