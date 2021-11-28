class Point < ApplicationRecord
  belongs_to :wiki_page
  belongs_to :path
end
