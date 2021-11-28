class GameSession < ApplicationRecord

  belongs_to :user
  has_many :rounds
  has_many :round_participations, through: :rounds
  has_many :users, through: :round_participations
  has_many :messages, dependent: :destroy
  validates :user, presence: true

end
