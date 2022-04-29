class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :cards
  has_many :users, through: :cards

end
