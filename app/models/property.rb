class Property < ApplicationRecord
    validates :owner_id, presence: true #foreign key
    validates :bedroom, :bathroom, :sqft, :address, :city, :state, :zipcode, presence: true
    validates :longitude, :altitude, :price, :rent, presence: true
    validates :cap_rate, :annualized_return, :total_return, :gross_yield, presence: true

    #check association
    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    has_one_attached :photo

    has_many :carts,
        primary_key: :id,
        foreign_key: :property_id,
        class_name: :CartItem

    has_many :favorites,
        primary_key: :id,
        foreign_key: :property_id,
        class_name: :Favorite

    # has_one :user,
    #     through: :favorites,
    #     source: :user

    
end
