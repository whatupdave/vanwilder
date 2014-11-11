Rails.application.routes.draw do
  root to: 'pages#home'

  resources :players, path: 'p', only: [:show]
end
