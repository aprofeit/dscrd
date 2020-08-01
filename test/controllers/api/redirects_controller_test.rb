require 'test_helper'

class Api::RedirectsControllerTest < ActionDispatch::IntegrationTest
  test 'creating a redirect with unexpected params' do
    assert_difference 'Redirect.count' do
      post '/api/redirects', params: { redirect: { vanity_url: '/sweet_url', destination_url: 'https://discord.gg/foo/abc123' } }
    end

    redirect = Redirect.last


    assert_equal 'sweet_url', redirect.vanity_url 
    assert_equal 'abc123', redirect.destination_url
  end

  test 'creating a redirect with expected params' do
    assert_difference 'Redirect.count' do
      post '/api/redirects', params: { redirect: { vanity_url: 'sweet_url', destination_url: 'abc123' } }
    end

    redirect = Redirect.last


    assert_equal 'sweet_url', redirect.vanity_url 
    assert_equal 'abc123', redirect.destination_url
  end
end
