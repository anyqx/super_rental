favorites.each do |favorite|
    json.set! favorite.property_id do
        json.extract! favorite, :id, :property_id, :user_id
        json.extract! favorite.property, :owner_id, :bedroom, :bathroom, :sqft,
            :address, :city, :state, :zipcode, :longitude, :altitude, :price, :rent,
            :cap_rate, :annualized_return, :total_return, :gross_yield
        if favorite.property.photo.attached?
            json.photoUrl url_for(favorite.property.photo)
        end
    end
end
