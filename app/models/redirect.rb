class Redirect < ApplicationRecord
  validates :vanity_url, presence: true, uniqueness: true
  validates :destination_url, presence: true

  def formatted_url
    "https://discord.gg/#{destination_url}"
  end
end
