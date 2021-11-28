class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update]

  def show
    world_records_all = current_user.paths.sort_by { |path| path.points.count }
    @world_records = []
    world_records_all.each do |world_record|
      if world_record.points.count > 2
        @world_records << world_record
      end
    end
    personal_records_all = current_user.round_participations.sort_by { |round_participation| round_participation.visited_pages.count }.uniq { |round_participation| [round_participation.round.start_page, round_participation.round.end_page] }
    @personal_records = []
    personal_records_all.each do |personal_record|
      if personal_record.visited_pages.count > 2
        @personal_records << personal_record
      end
    end
  end

  def edit
  end

  def update
    if @user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :photo)
  end

  def set_user
    @user = current_user
  end
end
