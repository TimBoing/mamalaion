class RoundParticipation < ApplicationRecord

  belongs_to :user
  belongs_to :round
  has_many :visited_pages
  validates :user, presence: true
  validates :round, presence: true
  validates :user, uniqueness: { scope: :round, message: "There can only be a RP per user per round" }

  def is_the_best?(locale)
    start_page = WikiPage.where(title: self.round.start_page, language: "#{locale}")
    end_page = WikiPage.where(title: self.visited_pages.last.title, language: "#{locale}")
    record_path = Path.find_by(start_page: start_page, end_page: end_page)
    if record_path.blank?
      return true
    else
      if self.visited_pages.count < record_path.points.count
        return true
      elsif record_path.user_id == self.user_id && self.visited_pages.count == record_path.points.count
        return true
      end
      return false
    end
  end

  def save_record(current_user, locale)
    start_page_title = self.round.start_page
    if WikiPage.find_by(title: start_page_title, language: locale).blank?
      WikiPage.create(title: start_page_title, url: self.round.start_page_url, language: locale)
    end
    start_page = WikiPage.find_by(title: start_page_title, language: "#{locale}")

    end_page_title = self.visited_pages.last.title
    if WikiPage.find_by(title: end_page_title, language: locale).blank?
      WikiPage.create(title: end_page_title, url: self.round.end_page_url, language: locale)
    end
    end_page = WikiPage.find_by(title: end_page_title, language: locale)

    record_path = Path.find_by(start_page: start_page, end_page: end_page)

    # creation of the new path
    if start_page == end_page
      #nothing happens
    elsif record_path.blank?
      Path.create(user: current_user, start_page: start_page, end_page: end_page, duration: (self.end_time.to_i - self.round.start_time.to_i))
    else
      record_path.update(user: current_user, start_page: start_page, end_page: end_page, duration: (self.end_time.to_i - self.round.start_time.to_i))
      record_path.points.each {|point| point.destroy}
    end

    # creation of points after the creation of the new WikiPages
    record_path = Path.find_by(start_page: start_page, end_page: end_page)
    position = 0
    self.visited_pages.each {|visited_page|
      if WikiPage.find_by(title: visited_page.title, language: "#{locale}").blank?
        WikiPage.create(title: visited_page.title, url: visited_page.url, language: locale)
      end
      position += 1
      Point.create(position: position, wiki_page: WikiPage.find_by(title: visited_page.title), path: record_path)
    }
  end


end
