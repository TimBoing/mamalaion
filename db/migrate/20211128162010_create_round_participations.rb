class CreateRoundParticipations < ActiveRecord::Migration[6.1]
  def change
    create_table :round_participations do |t|

      t.references :user, foreign_key: true
      t.references :round, foreign_key: true
      t.integer :score, default: 0
      t.integer :rank
      # t.integer :item1_used
      # t.integer :item2_used
      # t.integer :item3_used
      # t.integer :item4_used
      # t.integer :item5_used
      # t.integer :item6_used
      t.string :end_time

      t.timestamps
    end
  end
end
