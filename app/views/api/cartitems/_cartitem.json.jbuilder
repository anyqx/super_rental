cartitems.each do |item|
    json.set! item.id do
        json.extract! item, :id, :property_id, :user_id, :price, :terms
        # json.extract! item.property //if needed association
        if item.property.photo.attached?
            json.photoUrl url_for(item.property.photo)
        end
    end
end
