class WikiPage < ApplicationRecord

  has_many :points, dependent: :destroy
  has_many :start_page_paths, :class_name => 'Path', :foreign_key => 'start_page_id', dependent: :destroy
  has_many :end_page_paths, :class_name => 'Path', :foreign_key => 'end_page_id', dependent: :destroy
  validates :title, uniqueness: true

end
