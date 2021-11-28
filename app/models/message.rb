class Message < ApplicationRecord
  belongs_to :user
  belongs_to :game_session
  validates :content, presence: true, allow_blank: false
  after_create :broadcast_message

  def from?(some_user)
    user == some_user
  end

  def broadcast_message
    ActionCable.server.broadcast("game_session_channel_#{game_session.id}", {
      message_partial: ApplicationController.rederer.render(partial: 'game_sessions/messages', locals: { message: self }),
      current_user_id: user.id
    })
  end
end
