class CreatePoints < ActiveRecord::Migration[6.1]
  def change
    create_table :points do |t|

      t.integer :position
      t.references :path, foreign_key: true
      t.references :wiki_page, foreign_key: true

      t.timestamps
    end
  end
end
