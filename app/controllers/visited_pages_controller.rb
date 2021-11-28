class VisitedPagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user!

  def create
    @round_participation = RoundParticipation.find(params[:round_participation_id])
    @visited_page = VisitedPage.new(visited_page_params)
    @visited_page.round_participation = @round_participation
    @visited_page.save
  end

  def index
    @round_participation = RoundParticipation.find(params[:round_participation_id])
    visited_pages = @round_participation.visited_pages
    render json: {visited_page: visited_pages} and return
  end

  private

  def visited_page_params
    params.require(:visited_page).permit(:title, :url)
  end
end
