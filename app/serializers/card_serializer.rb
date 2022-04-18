class CardSerializer < ActiveModel::Serializer
  attributes :id, :owner, :notes, :user, :category
end
