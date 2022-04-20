class User < ApplicationRecord
    has_secure_password
    has_many :cards
    has_many :categories, through: :cards

    validates :username, presence: true, uniqueness: true
end
