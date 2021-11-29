class MessagesController < ApplicationController

  def create
    puts "----------------------------------------------------------------------"
    puts "CREATING MESSAGE"
    puts "----------------------------------------------------------------------"
    @message = Message.new(message_params)
    @game_session = GameSession.find(params[:game_session_id])
    @message.game_session = @game_session
    @message.user = current_user

    if @message.save
      GameSessionChannel.broadcast_to(
        @game_session,
        message_partial: render_to_string(partial: "game_sessions/message", locals: { message: @message }),
        # message_partial: ApplicationController.renderer.render(partial: 'game_sessions/message', locals: { message: self }),
        current_user_id: @message.user.id
      )
    end


    # Géré par le model after_create mtnt
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
