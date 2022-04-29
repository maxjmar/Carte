class Card < ApplicationRecord
    has_one_attached :image
    
    belongs_to :user
    belongs_to :category

    validates :owner, presence: true, uniqueness: true 
    validates :notes, presence: true

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
      end

end
