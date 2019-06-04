Rails.application.routes.draw do

  namespace :api do
    get 'recipes/update'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/api/login' => 'api/sessions#create'
  get '/api/logout' => 'api/sessions#destroy'
  get '/api/logedin' => 'api/sessions#logedin'
  get '/api/meal_plans/last' => 'api/meal_plans#last'
  get '/api/meal_plans/alexa' => 'api/meal_plans#alexa'


  namespace :api do
    resources :meal_plans , only: [:index, :show, :create] do
      post 'add_recipe'
      post 'remove_recipe'
    end
    resources :recipes, only: [:index] do
      post 'favorite'
      get 'isfavorite'
    end
  end
end
