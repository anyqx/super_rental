# @properties.each do |property|
#     json.set! property.id do
#         json.partial! 'property', property: property
#         # json.reviewIds[] (favorites??)
#     end
# end

json.array! @properties do |property|
    json.extract! property, :id, :owner_id, :title, :bedroom, :bathroom, :sqft,
        :address, :city, :state, :zipcode, :longitude, :altitude, :price, :rent,
        :cap_rate, :annualized_return, :total_return, :gross_yield
    json.photoUrl url_for(property.photo)
end