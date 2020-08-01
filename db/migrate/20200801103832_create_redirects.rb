class CreateRedirects < ActiveRecord::Migration[6.0]
  def change
    create_table :redirects do |t|
      t.string :vanity_url
      t.string :destination_url

      t.timestamps
    end
    add_index :redirects, :vanity_url, unique: true
  end
end
