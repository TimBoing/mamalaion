class Message < ApplicationRecord
  belongs_to :user
  belongs_to :game_session

  validates :content, presence: true, allow_blank: false

  def from?(some_user)
    user == some_user
  end
end
