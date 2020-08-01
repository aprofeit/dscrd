class Api::RedirectsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create
  def create
    redirect = Redirect.new(redirect_params)
    redirect.vanity_url = redirect.vanity_url.scan(/\w+/).first
    redirect.destination_url = redirect.destination_url.scan(/\w+/).last

    if redirect.save
      render json: {
        redirect: {
          vanity_url: redirect.formatted_url
        }
      }
    else
      render json: {
        errors: redirect.errors.full_messages.join(', ')
      }, status: 422
    end
  end

  private

  def redirect_params
    params.require(:redirect).permit(:vanity_url, :destination_url)
  end
end
