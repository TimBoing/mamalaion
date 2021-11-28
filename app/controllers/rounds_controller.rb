class RoundsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:update]

  def index
    @game_session = GameSession.find(params[:game_session_id])
    @rounds = Round.where(game_session_id: @game_session.id)
    @players = @game_session.users.uniq.sort_by{ |player| player.total_score_for(@game_session)}.reverse
  end

  def show
    @host_name = request.protocol + request.host_with_port #pour gérer le soucis de redirection des bouttons
    @round = Round.find(params[:id])
    @game_session = @round.game_session
    @round_participation_id = @round.round_participations.where(user: current_user).first.id
    ActionCable.server.broadcast("game_session_channel_#{@game_session.id}", content: @round.id, new_round_link_off: '<button class="player_replay_button btn-tim main-red" style="opacity: 0.5;"><i>Désolé, la partie a déjà commencé...</i></button>') if @round.state != "playing"
    @round.update(state: "playing")
  end

  def new
    @round = Round.new
    @game_session = GameSession.find(params[:game_session_id])
    wiki_pages_all = WikiPage.all.sort_by { |wiki_page| wiki_page.title }
    @wiki_pages = wiki_pages_all.select { |wikipage| wikipage.language == "#{locale}" }
   end

  def create

    @round = Round.new(round_params)

    @round.game_session_id = params[:game_session_id]
    @round.game_mode = params[:game_mode]
    @round.game_options = params[:round][:game_options]
    @round.search_bar = params[:round][:search_bar]
    @round.reverse = params[:round][:reverse]
    @round.back = params[:round][:back]
    @round.charlie = params[:round][:charlie]

    if params[:round][:start_page] == ""
      @round.start_page_url = random_page_url
      @round.start_page = random_page_title(@round.start_page_url)
      @round.start_page_random = true
    else
      @round.start_page = WikiPage.find(params[:round][:start_page]).title
      @round.start_page_url = WikiPage.find(params[:round][:start_page]).url
    end

    if params[:round][:end_page] == ""
      @round.end_page_url = random_page_url
      @round.end_page = random_page_title(@round.end_page_url)
      @round.end_page_random = true
    else
      @round.end_page = WikiPage.find(params[:round][:end_page]).title
      @round.end_page_url = WikiPage.find(params[:round][:end_page]).url
    end
    if @round.save
      round_participation = RoundParticipation.new
      round_participation.user = current_user
      round_participation.round = @round
      if round_participation.save
        redirect_to game_session_path(params[:game_session_id])
      else
        render :new
      end
    else
      render :new
    end
  end

  def update
    round = Round.find(params[:id])
    if params[:start_game]
      t = Time.now
      start_time = t.to_f * 1000
      round.update(start_time: start_time)
      redirect_to round_path(round)
    end

    unless params[:state].nil?
      round.update(state: 'ended')
      winner = User.find(params[:winner]).username
      ActionCable.server.broadcast("game_session_channel_#{round.game_session.id}", end_game: winner)
      RoundScoreComputer.new(round).call
    end

    unless params[:malus].nil?
      ActionCable.server.broadcast("game_session_channel_#{round.game_session.id}", malus: params[:malus])
    end
  end

  private

  def round_params
    params.require(:round).permit(:game_mode, :start_page, :end_page)
  end

  def random_page_url
    if locale == :en
      url_for_random_title = 'https://en.wikipedia.org/api/rest_v1/page/random/title'
    else
      url_for_random_title = 'https://fr.wikipedia.org/api/rest_v1/page/random/title'
    end
  end

  def random_page_title(url)
    page_raw = open(url).read
    page_json = JSON.parse(page_raw)
    page = page_json["items"][0]['title']
  end

end
