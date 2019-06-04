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
UsersFavoriteRecipe.delete_all
RecipesAllergy.delete_all
RecipesDietType.delete_all;

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
recipe6 = Recipe.create! name: 'Nutty Cinnamon Quinoa', edaman_id: '70386282c8bbc742149df16aff4e089e', main_ingredient: 'quinoa', servings: 4, img_source:'https://www.edamam.com/web-img/862/86252014c2ef25dd041d6b052c1bc122.jpg', shareAs: 'http://www.edamam.com/recipe/warm-and-nutty-cinnamon-quinoa-recipe-70386282c8bbc742149df16aff4e089e/quinoa'
recipe7 = Recipe.create! name: 'Chicken Quinoa', edaman_id: 'a25ab6e41f439e4cc0721f3f34780da9', main_ingredient: 'quinoa', servings: 2, img_source:'https://www.edamam.com/web-img/560/5606f4fb972e0789464fecdc9ca595aa.JPG', shareAs: 'http://www.edamam.com/recipe/chicken-quinoa-a25ab6e41f439e4cc0721f3f34780da9/quinoa'
recipe8 = Recipe.create! name: 'Quinoa Chowder', edaman_id: '4ff5da533d621b243b7594cf1145f176', main_ingredient: 'quinoa', servings: 4, img_source:'https://www.edamam.com/web-img/912/912a78df8f2316f478ab0b2a510c0605.jpg', shareAs: 'http://www.edamam.com/recipe/quinoa-chowder-4ff5da533d621b243b7594cf1145f176/quinoa'
#recipe = Recipe.create! name: '', edaman_id: '', main_ingredient: '', servings: , img_source:'', shareAs: ''
recipe9 = Recipe.create! name: 'Balsamic Quinoa Salad', edaman_id: 'b92435ccdff962a73aff447351c7b0f2', main_ingredient: 'quinoa', servings: 4 , img_source:'https://www.edamam.com/web-img/d57/d5778d1f0fe743be2b3fa45f2530dac1', shareAs: 'http://www.edamam.com/recipe/quick-balsamic-quinoa-salad-recipes-b92435ccdff962a73aff447351c7b0f2/quinoa'
recipe10 = Recipe.create! name: 'Fish Cucumber Salad', edaman_id: '17b514c50a6dd4fc9f2d99a45a645c14', main_ingredient: 'fish', servings: 4, img_source:'https://www.edamam.com/web-img/136/1362cc0f20b9c105716a58984a17f816.jpg', shareAs: 'http://www.edamam.com/recipe/cool-and-spicy-fish-and-cucumber-salad-17b514c50a6dd4fc9f2d99a45a645c14/fish'
#recipe = Recipe.create! name: '', edaman_id: '', main_ingredient: '', servings: , img_source:'', shareAs: ''
recipe11 = Recipe.create! name: 'Rainbow Rice', edaman_id: 'dc1ed9e2cafc516f2e850e26510cfe67', main_ingredient: 'rice', servings: 2, img_source:'https://www.edamam.com/web-img/132/132c14353d52572d1354dce07ba9b24e.jpg', shareAs: 'https://www.edamam.com/recipe/rainbow-rice-dc1ed9e2cafc516f2e850e26510cfe67/rice'
recipe12 = Recipe.create! name: 'Roasted Spaghetti Squash', edaman_id: '6dc2f5b272379da6fc3b02dbd53d213b', main_ingredient: 'squash', servings: 2, img_source:'https://www.edamam.com/web-img/1aa/1aa2baae82a997df3ed8845f747e816c.jpg', shareAs: 'http://www.edamam.com/recipe/meatless-monday-roasted-spaghetti-squash-6dc2f5b272379da6fc3b02dbd53d213b/spaghetti'
recipe13 = Recipe.create! name: 'Chicken Marengo', edaman_id: '182eb4e5d92618a9e132d55cc9a080e5', main_ingredient: 'chicken', servings: 4 , img_source:'https://www.edamam.com/web-img/ef0/ef0e5316c430c3ec6b26edd187373569.jpg', shareAs: 'http://www.edamam.com/recipe/chicken-marengo-182eb4e5d92618a9e132d55cc9a080e5/chicken-marengo'
recipe14 = Recipe.create! name: 'Potato & salmon grill', edaman_id: 'aba3caf2c01fa25a4bd3914767f2a22a', main_ingredient: 'salmon', servings: 4, img_source:'https://www.edamam.com/web-img/079/0791b0be9ad3272b4bd899a41b557fc5.jpg', shareAs: 'http://www.edamam.com/recipe/potato-salmon-grill-aba3caf2c01fa25a4bd3914767f2a22a/potato-salmon'
recipe15 = Recipe.create! name: 'Potato Chip–Crust Salmon', edaman_id: 'd6c36964962a31e770e4a03b36a57409', main_ingredient: 'salmon', servings: 2, img_source:'https://www.edamam.com/web-img/20b/20b726d1c639601cc604182f35dd431f.jpg', shareAs: 'http://www.edamam.com/recipe/dinner-tonight-potato-chip-crust-salmon-d6c36964962a31e770e4a03b36a57409/potato-salmon'
recipe16 = Recipe.create! name: 'Salmon Fillets Crust', edaman_id: '1e29f6599d3e86b8608a8dac7decdeab', main_ingredient: 'salmon', servings: 2, img_source:'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18151406/potato-crusted-fish-main.jpg', shareAs: ''
recipe17 = Recipe.create! name: 'Chicken & Noodles', edaman_id: 'a69993d4ad2cd619bd6128df284a3968', main_ingredient: 'chicken', servings: 4, img_source:'https://www.edamam.com/web-img/476/476ccf0e658c8719da9658e967cd23ce.jpeg', shareAs: 'http://www.edamam.com/recipe/25-minute-chicken-noodles-a69993d4ad2cd619bd6128df284a3968/chicken-noodles'
recipe18 = Recipe.create! name: 'Chicken Couscous Salad', edaman_id: '8958acf73e4433fbcdaaffee03836225', main_ingredient: 'chicken', servings: 4, img_source:'https://www.edamam.com/web-img/032/032e0e43e1a678f463cf86c96a4b1511.jpg', shareAs: 'http://www.edamam.com/recipe/chicken-couscous-salad-8958acf73e4433fbcdaaffee03836225/chicken-couscous'
recipe19 = Recipe.create! name: 'Flambéed Chicken Asparagus', edaman_id: '9f71b9c53d2b3cf2d2fe410e581385aa', main_ingredient: 'chicken', servings: 4, img_source:'https://www.edamam.com/web-img/61a/61a811d03c8ad9202fe81f12b2ea2228.jpg', shareAs: 'http://www.edamam.com/recipe/flamb%C3%A9ed-chicken-with-asparagus-9f71b9c53d2b3cf2d2fe410e581385aa/flamb%C3%A9ed-chicken'
recipe20 = Recipe.create! name: 'Cod & chorizo stew', edaman_id: '0678fdc61d63fcbd2c237b99feca94cb', main_ingredient: 'cod', servings: 4, img_source:'https://www.edamam.com/web-img/e53/e53a705a950323e23f354b20dfee5597.jpg', shareAs: 'http://www.edamam.com/recipe/cod-chorizo-stew-0678fdc61d63fcbd2c237b99feca94cb/cod-chorizo'
recipe21 = Recipe.create! name: 'Lemony Grilled Salmon', edaman_id: '3fd52b75cdbf6ab163dccaf8fe5bf2d0', main_ingredient: 'salmon', servings: 4, img_source:'https://www.edamam.com/web-img/74d/74dc59f91fa247195ecce058d8151483', shareAs: 'http://www.edamam.com/recipe/lemony-grilled-salmon-fillets-with-dill-sauce-recipes-3fd52b75cdbf6ab163dccaf8fe5bf2d0/lemony-grilled-salmon'
recipe22 = Recipe.create! name: 'Red Pepper Couscous', edaman_id: '0e5cdc1fab6f69583866442011178b52', main_ingredient: 'couscous', servings: 4, img_source:'https://www.edamam.com/web-img/8f2/8f2ca60bcdb9c6c93a4174b8fa46e5dc.jpg', shareAs: 'http://www.edamam.com/recipe/red-pepper-couscous-0e5cdc1fab6f69583866442011178b52/red-pepper-couscous'
recipe23 = Recipe.create! name: 'Moroccan Chicken Couscous', edaman_id: '3558f57961df0ca76d750c1040dba3c4', main_ingredient: 'chicken', servings: 4, img_source:'https://www.edamam.com/web-img/cca/cca02f8e685431941f75327f9489554f.jpg', shareAs: 'http://www.edamam.com/recipe/moroccan-chicken-couscous-3558f57961df0ca76d750c1040dba3c4/chicken-couscous'
#recipe = Recipe.create! name: '', edaman_id: '', main_ingredient: '', servings: , img_source:'', shareAs: ''
#recipe = Recipe.create! name: '', edaman_id: '', main_ingredient: '', servings: , img_source:'', shareAs: ''

MealPlansRecipe.create! meal_plan: meal_plan1, recipe: recipe1
MealPlansRecipe.create! meal_plan: meal_plan1, recipe: recipe2
MealPlansRecipe.create! meal_plan: meal_plan1, recipe: recipe3
MealPlansRecipe.create! meal_plan: meal_plan1, recipe: recipe4
MealPlansRecipe.create! meal_plan: meal_plan1, recipe: recipe5


RecipesAllergy.create! recipe: recipe6, allergy: allergy_p
RecipesAllergy.create! recipe: recipe6, allergy: allergy_g
RecipesAllergy.create! recipe: recipe7, allergy: allergy_p
RecipesAllergy.create! recipe: recipe7, allergy: allergy_g
RecipesAllergy.create! recipe: recipe8, allergy: allergy_p
RecipesAllergy.create! recipe: recipe8, allergy: allergy_g
RecipesAllergy.create! recipe: recipe8, allergy: allergy_n
RecipesAllergy.create! recipe: recipe9, allergy: allergy_g
RecipesAllergy.create! recipe: recipe9, allergy: allergy_n
RecipesAllergy.create! recipe: recipe9, allergy: allergy_f
RecipesAllergy.create! recipe: recipe9, allergy: allergy_e
RecipesAllergy.create! recipe: recipe9, allergy: allergy_d
RecipesAllergy.create! recipe: recipe10, allergy: allergy_d
RecipesAllergy.create! recipe: recipe10, allergy: allergy_e
RecipesAllergy.create! recipe: recipe10, allergy: allergy_n
RecipesAllergy.create! recipe: recipe11, allergy: allergy_d
RecipesAllergy.create! recipe: recipe11, allergy: allergy_g
RecipesAllergy.create! recipe: recipe11, allergy: allergy_e
RecipesAllergy.create! recipe: recipe11, allergy: allergy_f
RecipesAllergy.create! recipe: recipe11, allergy: allergy_n
RecipesAllergy.create! recipe: recipe11, allergy: allergy_w
RecipesAllergy.create! recipe: recipe12, allergy: allergy_d
RecipesAllergy.create! recipe: recipe12, allergy: allergy_g
RecipesAllergy.create! recipe: recipe12, allergy: allergy_e
RecipesAllergy.create! recipe: recipe12, allergy: allergy_f
RecipesAllergy.create! recipe: recipe12, allergy: allergy_n
RecipesAllergy.create! recipe: recipe12, allergy: allergy_w
RecipesAllergy.create! recipe: recipe13, allergy: allergy_e
RecipesAllergy.create! recipe: recipe13, allergy: allergy_f
RecipesAllergy.create! recipe: recipe13, allergy: allergy_n
RecipesAllergy.create! recipe: recipe13, allergy: allergy_d
RecipesAllergy.create! recipe: recipe14, allergy: allergy_g
RecipesAllergy.create! recipe: recipe14, allergy: allergy_w
RecipesAllergy.create! recipe: recipe14, allergy: allergy_e
RecipesAllergy.create! recipe: recipe14, allergy: allergy_n
RecipesAllergy.create! recipe: recipe15, allergy: allergy_d
RecipesAllergy.create! recipe: recipe15, allergy: allergy_g
RecipesAllergy.create! recipe: recipe15, allergy: allergy_w
RecipesAllergy.create! recipe: recipe15, allergy: allergy_e
RecipesAllergy.create! recipe: recipe15, allergy: allergy_n
RecipesAllergy.create! recipe: recipe16, allergy: allergy_w
RecipesAllergy.create! recipe: recipe16, allergy: allergy_g
RecipesAllergy.create! recipe: recipe16, allergy: allergy_n
RecipesAllergy.create! recipe: recipe17, allergy: allergy_d
RecipesAllergy.create! recipe: recipe17, allergy: allergy_n
RecipesAllergy.create! recipe: recipe17, allergy: allergy_f
RecipesAllergy.create! recipe: recipe18, allergy: allergy_e
RecipesAllergy.create! recipe: recipe18, allergy: allergy_d
RecipesAllergy.create! recipe: recipe18, allergy: allergy_f
RecipesAllergy.create! recipe: recipe18, allergy: allergy_n
RecipesAllergy.create! recipe: recipe19, allergy: allergy_e
RecipesAllergy.create! recipe: recipe19, allergy: allergy_f
RecipesAllergy.create! recipe: recipe19, allergy: allergy_n
RecipesAllergy.create! recipe: recipe20, allergy: allergy_d
RecipesAllergy.create! recipe: recipe20, allergy: allergy_g
RecipesAllergy.create! recipe: recipe20, allergy: allergy_w
RecipesAllergy.create! recipe: recipe20, allergy: allergy_n
RecipesAllergy.create! recipe: recipe21, allergy: allergy_e
RecipesAllergy.create! recipe: recipe21, allergy: allergy_g
RecipesAllergy.create! recipe: recipe21, allergy: allergy_w
RecipesAllergy.create! recipe: recipe21, allergy: allergy_n
RecipesAllergy.create! recipe: recipe22, allergy: allergy_e
RecipesAllergy.create! recipe: recipe22, allergy: allergy_f
RecipesAllergy.create! recipe: recipe22, allergy: allergy_d
RecipesAllergy.create! recipe: recipe22, allergy: allergy_n
RecipesAllergy.create! recipe: recipe23, allergy: allergy_e
RecipesAllergy.create! recipe: recipe23, allergy: allergy_f
RecipesAllergy.create! recipe: recipe23, allergy: allergy_d
RecipesAllergy.create! recipe: recipe23, allergy: allergy_n







RecipesDietType.create! recipe: recipe6, diet_type: diet_v
RecipesDietType.create! recipe: recipe6, diet_type: diet_p
RecipesDietType.create! recipe: recipe8, diet_type: diet_v
RecipesDietType.create! recipe: recipe8, diet_type: diet_p
RecipesDietType.create! recipe: recipe9, diet_type: diet_v
RecipesDietType.create! recipe: recipe9, diet_type: diet_p
RecipesDietType.create! recipe: recipe10, diet_type: diet_p
RecipesDietType.create! recipe: recipe11, diet_type: diet_p
RecipesDietType.create! recipe: recipe11, diet_type: diet_v
RecipesDietType.create! recipe: recipe12, diet_type: diet_p
RecipesDietType.create! recipe: recipe12, diet_type: diet_v
RecipesDietType.create! recipe: recipe12, diet_type: diet_l
RecipesDietType.create! recipe: recipe14, diet_type: diet_p
RecipesDietType.create! recipe: recipe15, diet_type: diet_p
RecipesDietType.create! recipe: recipe15, diet_type: diet_k
RecipesDietType.create! recipe: recipe16, diet_type: diet_p
RecipesDietType.create! recipe: recipe16, diet_type: diet_k
RecipesDietType.create! recipe: recipe21, diet_type: diet_p
RecipesDietType.create! recipe: recipe22, diet_type: diet_p
RecipesDietType.create! recipe: recipe22, diet_type: diet_v





UsersFavoriteRecipe.create! user: user1, recipe: recipe1
UsersFavoriteRecipe.create! user: user1, recipe: recipe2

puts "Data seeded. DONE!"
