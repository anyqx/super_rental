class Favorite < ApplicationRecord
    validates :user_id, presence: true
    validates :property_id, presence: true, uniqueness: {scope: :user_id}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :property,
        foreign_key: :property_id,
        class_name: :Property

        
end
