Rails.application.routes.draw do

  namespace :api do
    get 'recipes/update'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/api/login' => 'api/sessions#create'
  get '/api/logout' => 'api/sessions#destroy'
  get '/api/logedin' => 'api/sessions#logedin'
  get '/api/meal_plans/last' => 'api/meal_plans#last'


  namespace :api do
    #get '/data', to: 'tests#index'
    resources :meal_plans , only: [:index, :show, :create]
    resources :recipes do
      post 'favorite'
    end#, only: [:create, :destroy, :index, :update]
  end
end
