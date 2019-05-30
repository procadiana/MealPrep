Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/api/login' => 'api/sessions#create'
  get '/api/logout' => 'api/sessions#destroy'


  namespace :api do
    #get '/data', to: 'tests#index'
    resources :meal_plans

  end
end
