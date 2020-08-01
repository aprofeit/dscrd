require 'test_helper'

class RedirectsControllerTest < ActionDispatch::IntegrationTest
  test 'redirecting from a vanity_url to a destination_url' do
    get '/d/nightman'

    assert_redirected_to 'https://discord.gg/AWefEww'
  end
end
