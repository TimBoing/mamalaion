class CreateGameSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :game_sessions do |t|
      t.references :user, foreign_key: true
      t.string :language
      t.timestamps
    end
  end
end
