class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|

      t.references :user, foreign_key: true
      t.references :game_session, foreign_key: true
      t.string :content

      t.timestamps
    end
  end
end
