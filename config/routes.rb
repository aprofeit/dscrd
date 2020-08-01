Rails.application.routes.draw do
  namespace :api do
    resources :redirects, only: [:create]
  end

  get '/d/*vanity_url' => 'redirects#show'
end
