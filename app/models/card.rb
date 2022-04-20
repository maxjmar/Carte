class Card < ApplicationRecord
    has_one_attached :image
    
    belongs_to :user
    belongs_to :category

    validates :owner, presence: true, uniqueness: true 
    validates :notes, presence: true

end
