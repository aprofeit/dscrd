require 'test_helper'

class RedirectTest < ActiveSupport::TestCase
  setup do
    @nightman = redirects(:nightman)
  end

  test "formatted title works as expected" do
    assert_equal "https://discord.gg/AWefEww", @nightman.formatted_url
  end

  test "creating a weird redirect" do
    assert_difference 'Redirect.count' do
      Redirect.create!(
        vanity_url: 'this-is-something-weird',
        destination_url: 'https://discord.gg/ajfdslkf'
      )
    end
  end
end
