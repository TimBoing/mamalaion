class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :game_sessions
  has_many :round_participations
  has_many :messages, dependent: :destroy
  has_many :paths, dependent: :destroy

  has_one_attached :photo

  validates :username, presence: true, uniqueness: true

  def total_score_for(game_session)
    game_session.round_participations.where(user: self).map(&:score).sum
  end

  def total_clicks_for(game_session)
    visited_pages = []
    game_session.round_participations.where(user: self).each do |round_participation|
      round_participation.visited_pages.each do |visited_page|
        visited_pages << visited_page
      end
    end
    visited_pages_count = visited_pages.count - game_session.rounds.count
  end
end
