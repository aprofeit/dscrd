class RedirectsController < ApplicationController
  def show
    redirect = Redirect.find_by!(vanity_url: params[:vanity_url])

    redirect_to "https://discord.gg/#{redirect.destination_url}"
  end
end
