Rails.application.routes.draw do
  root 'ideas#index'

  resources :ideas, only: [:show]

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :ideas, only: [:index, :create, :destroy, :update]
    end
  end
end
