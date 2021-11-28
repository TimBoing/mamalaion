class CreateWikiPages < ActiveRecord::Migration[6.1]
  def change
    create_table :wiki_pages do |t|

      t.string :title
      t.string :url
      t.text :categories
      t.string :language

      t.timestamps
    end
  end
end
