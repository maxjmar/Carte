class CardSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :owner, :notes, :user_id, :category_id, :image
  belongs_to :user
  belongs_to :category

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
