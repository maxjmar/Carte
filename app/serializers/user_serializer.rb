class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_many :cards,
  has_many :categories, through: :cards
end
