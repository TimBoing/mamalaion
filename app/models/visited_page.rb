class VisitedPage < ApplicationRecord

  belongs_to :round_participation
  validates :round_participation, presence: true

end
