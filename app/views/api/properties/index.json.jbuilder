@properties.each do |property|
    json.set! property.id do
        json.partial! 'property', property: property
        # json.reviewIds[] (favorites??)
    end
end