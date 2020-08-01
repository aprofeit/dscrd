class Api::RedirectsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create
  def create
    redirect = Redirect.new(redirect_params)
    redirect.vanity_url = redirect.vanity_url.scan(/\w+/).first
    redirect.destination_url = redirect.destination_url.scan(/\w+/).last

    if redirect.save
      head :created
    else
      head :unprocessable_entity
    end
  end

  private

  def redirect_params
    params.require(:redirect).permit(:vanity_url, :destination_url)
  end
end
