class PathsController < ApplicationController
  skip_before_action :authenticate_user!

  def show
    if params[:start_page].blank? && params[:end_page].blank?
      easy_paths = Path.all.select { |path| path.points.count <= 5 && path.points.count > 2 && path.start_page.language == params[:language] }
      @easy_path = easy_paths.sample
      render json: {start_page: @easy_path.start_page, end_page: @easy_path.end_page} and return
    else

      start_page = WikiPage.find(params[:start_page].to_i) if !params[:start_page].blank?
      end_page = WikiPage.find(params[:end_page].to_i) if !params[:end_page].blank?

      if start_page && end_page
        @path = Path.find_by(start_page: start_page, end_page: end_page)
        if !@path.blank?
          render json: {min_click: @path.points.count - 1} and return
        end
        render json: {min_click: ""} and return
      else
        render json: {min_click: ""} and return
      end
    end
  end
end
