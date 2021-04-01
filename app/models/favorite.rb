class Favorite < ApplicationRecord
    validates :property_id, :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :property,
        foreign_key: :property_id,
        class_name: :Property

        
end
