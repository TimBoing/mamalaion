class CreateRounds < ActiveRecord::Migration[6.1]
  def change
    create_table :rounds do |t|

      t.string :start_page
      t.string :start_page_url
      t.string :end_page
      t.string :end_page_url
      t.string :game_mode
      t.string :game_options
      t.boolean :search_bar, default: true
      t.boolean :reverse, default: false
      t.boolean :back, default: true
      t.boolean :start_page_random, default: false
      t.boolean :charlie, default: false
      t.boolean :end_page_random, default: false
      t.string :state, default: 'initiated'
      t.string :start_time
      t.references :game_session, foreign_key: true

      t.timestamps
    end
  end
end
