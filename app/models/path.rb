class Path < ApplicationRecord
  belongs_to :user
  belongs_to :start_page, :class_name => 'WikiPage'
  belongs_to :end_page, :class_name => 'WikiPage', optional: true

  has_many :points, dependent: :destroy
end
