class Redirect < ApplicationRecord
  def formatted_url
    "https://discord.gg/#{destination_url}"
  end
end
