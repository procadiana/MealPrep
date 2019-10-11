## MEAL PREP

A food app that helps plan your meals in advance and create your grocery list using a recipes API. The app will generate a set of easy recipes according to the user preferences and needs. The user can save recipes to their favorites list, customize their meal plan and share the shopping list on email.

## Main Contributors
Anitha Amarnath [anithaamarnath](https://github.com/anithaamarnath), Diana Ilinca [procadiana](https://github.com/procadiana), Karina Lopez [karinalop](https://github.com/karinalop)


## Getting Started
1. Clone this repository.
2.  Create or use your https://www.edamam.com/ (recipes API) and store your KEY_API_ID and KEY_API_PASS on the .env file into the `rails-back-end` folder
3. You need **TWO** terminals to run this proyect:
  - In one terminal:
`cd rails-back-end`,
`bundle` to install the dependencies,
`bin/rake db:setup` to create the databases (called rails_project_development by default),
`bin/rake db:migrate` tu run migrations,
`bin/rake db:seed` to seed the database,
`bin/rails s` to run the server.
  - In the other terminal:
   `cd react-front-end`,
   `npm install`,
   `npm start`
4. The app will be served at http://localhost:3000/.



## Final Project

!["Home page"](https://github.com/procadiana/MealPrep/blob/master/docs/Home.png)
!["Login Page"](https://github.com/procadiana/MealPrep/blob/master/docs/Login.png)
!["Creating a New Meal Plan"](https://github.com/procadiana/MealPrep/blob/master/docs/Create%20New%20Meal%20Plan.png)
!["Meal Plan"](https://github.com/procadiana/MealPrep/blob/master/docs/Meal%20Plan.png)
!["Recipe Details"](https://github.com/procadiana/MealPrep/blob/master/docs/Details%20of%20Recipe.png)
!["Current Meal Plan and Favorite Recipes"](https://github.com/procadiana/MealPrep/blob/master/docs/Current%20Meal%20Plan%20and%20Favorite%20Recipes.png)
!["Meal Plan History"](https://github.com/procadiana/MealPrep/blob/master/docs/Meal%20Plan%20History.png)


## Tech Stack

1.Axios
2.Edamam API https://www.edamam.com/
3.React
4.Reactstrap
5.Ruby on rails
6. Postgres


## Contact the Contributors

Questions? Comments? Want to contribute to this? Feel free to contact any of the contributors of this repo.