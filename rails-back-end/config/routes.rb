Rails.application.routes.draw do

  namespace :api do
    get 'recipes/update'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/api/login' => 'api/sessions#create'
  get '/api/logout' => 'api/sessions#destroy'


  namespace :api do
    #get '/data', to: 'tests#index'
    resources :meal_plans , only: [:index, :show, :create]
    resources :recipes, only: [:create, :destroy]
  end
end
