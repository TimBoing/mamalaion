class GameSessionsController < ApplicationController

  skip_before_action :authenticate_user!, only: [:new, :create]

  def new
    @game_session = GameSession.new
    @round = Round.new
    @round_participation = RoundParticipation.new
  end

  def create
    @game_session = GameSession.new(user_id: current_user.id, language: locale)
    if @game_session.save
      redirect_to new_game_session_round_path(@game_session)
    else
      render :new
    end
  end

  def show
    # This is the waiting page
    @game_session = GameSession.find(params[:id])
    @messages = Message.where(game_session_id: @game_session.id)
    @round = Round.where(game_session_id: @game_session).last
    ActionCable.server.broadcast("game_session_channel_#{@game_session.id}", player: current_user.username, connected: "Participants : #{@round.round_participations.count}" , new_round_link: helpers.link_to('Nouveau Round', round_round_participations_path(@round), method: :post, class: "btn-tim main-red"))
  end

end
