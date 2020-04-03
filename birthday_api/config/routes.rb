Rails.application.routes.draw do
  resources :gifts
  resources :birthdays do
    resources :gifts
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
