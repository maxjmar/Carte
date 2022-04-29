class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  has_many :cards
  has_many :categories, through: :cards
end
