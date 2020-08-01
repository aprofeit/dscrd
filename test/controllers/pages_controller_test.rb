require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test 'fetching home page' do
    get '/'

    assert_response :success
  end
end
