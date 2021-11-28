class GameSessionsQuickController < ApplicationController
  skip_before_action :authenticate_user!, only: [:new]

  def new
    if locale == :en
      @unknown_user = User.find_by(username: "ModeSoloEN")
    else
      @unknown_user = User.find_by(username: "ModeSoloFR")
    end
    @game_session = GameSession.find_by(user: @unknown_user)
    @round = Round.new
    @round.game_session = @game_session
    @round.save
    @round_participation = RoundParticipation.new
    wiki_pages_all = WikiPage.all.sort_by { |wiki_page| wiki_page.title }
    @wiki_pages = wiki_pages_all.select { |wikipage| wikipage.language == "#{locale}" }
  end
end
