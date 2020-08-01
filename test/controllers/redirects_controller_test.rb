require 'test_helper'

class RedirectsControllerTest < ActionDispatch::IntegrationTest
  test 'redirecting from a vanity_url to a destination_url' do
    get 'd/alwayssunny'

    assert_redirected_to 'https://discord.gg/AWefEww'
  end

  test 'creating a redirect' do
    assert_difference 'Redirect.count' do
      post '/api/redirects', params: { redirect: { vanity_url: '/sweet_url', destination_url: 'https://discord.gg/abc123' } }
    end

    redirect = Redirect.last


    assert_equal 'sweet_url', redirect.vanity_url 
    assert_euqal 'https://discord.gg/abc123'
  end
end
