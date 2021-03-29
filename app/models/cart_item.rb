class CartItem < ApplicationRecord
    validates :property_id, :user_id, :price, :terms, presence: true

    belongs_to :property,
    foreign_key: :property_id,
    class_name: :Property

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
