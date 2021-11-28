class MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    @game_session = GameSession.find(params[:game_session_id])
    @message.game_session = @game_session
    @message.user = current_user
    # if @message.save
    #   # here is the broadcast that happens when a message is saved
    #   ActionCable.server.broadcast("game_session_channel_#{@game_session.id}", {
    #     message_partial: render(partial: 'game_sessions/messages', locals: { message: @message }),
    #     current_user_id: current_user.id
    #   })
    # end
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end

end
