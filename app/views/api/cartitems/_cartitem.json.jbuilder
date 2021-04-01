cartitems.each do |item|
    json.set! item.id do
        json.extract! item, :id, :property_id, :user_id, :offer_price, :terms
        json.extract! item.property, :owner_id, :bedroom, :bathroom, :sqft,
            :address, :city, :state, :zipcode, :longitude, :altitude, :price, :rent,
            :cap_rate, :annualized_return, :total_return, :gross_yield
        if item.property.photo.attached?
            json.photoUrl url_for(item.property.photo)
        end
    end
end
