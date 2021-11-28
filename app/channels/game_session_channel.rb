class GameSessionChannel < ApplicationCable::Channel
  def subscribed
    stream_from "game_session_channel_#{params[:game_session_id]}"
    stream_from "game_session_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
