class Message < ApplicationRecord
  belongs_to :user
  belongs_to :game_session
  validates :content, presence: true, allow_blank: false
  # after_create :broadcast_message

  def from?(some_user)
    user == some_user
  end

  # def broadcast_message
  #   puts "------------------------------------------------------------------------------------"
  #   puts "BROADCASTING MESSAGE"
  #   puts "------------------------------------------------------------------------------------"
  #   # ActionCable.server.broadcast("game_session_channel_#{game_session.id}", {
  #   #   message_partial: ApplicationController.rederer.render(partial: 'game_sessions/messages', locals: { message: self }),
  #   #   current_user_id: user.id
  #   # })

  #   # GameSessionChannel.broadcast_to(
  #   #   game_session,
  #   #   message_partial: ApplicationController.renderer.render(partial: 'game_sessions/message', locals: { message: self }),
  #   #   current_user_id: user.id
  #   # )
  # end
end
