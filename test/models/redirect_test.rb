require 'test_helper'

class RedirectTest < ActiveSupport::TestCase
  setup do
    @nightman = redirects(:nightman)
  end

  test "formatted title works as expected" do
    assert_equal "https://discord.gg/AWefEww", @nightman.formatted_url
  end
end
