# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
demo = User.create(email:'demo@gmail.com', password:'12345678')
test1 = User.create(email:'test1@email.com', password:'12345678')
test2 = User.create(email:'test2@email.com', password:'12345678')
test3 = User.create(email:'test3@email.com', password:'12345678')


Property.destroy_all

(1..23).each do |house_num|
    bedrooms = rand(3..10)
    bathrooms = bedrooms / 2 + rand(2)
    sqft = rand(2500..8000)
    random_address = [
        'Wonderland',
        'Fantasyland',
        'Dreamworld',
        'Carnival',
        'Royal Carribean',
        'Adventureland',
        'Tomorrowland',
        'Animal Kingdom',
        'Mammoth',
        'Space Mountain',
        'Captain Jack Sparrow',
        'Frozen'
    ]
    zipcode = rand(91000..92000)
    longitude = rand(35..35.2).round(4)
    altitude = rand(118..118.5).round(4)
    price = rand(200000..1500000)
    rent = price * (rand(0.006..0.009))
    cap_rate = (rent * 12 / price * rand(0.75..0.88) * 100).round(2)
    annualized_return = (cap_rate + rand(-1..1)).round(2)
    total_return = (annualized_return / 100 * price * rand(0.5..0.7) * 10).round(2)
    gross_yield = (annualized_return + rand(-1..1)).round(2)
  
    newProperty = Property.create(
        owner_id: demo.id,
        bedroom: bedrooms,
        bathroom: bathrooms,
        sqft: sqft,
        address: "#{rand(2000)}" + " " + random_address[rand(random_address.length-1)],
        city: 'Los Angeles',
        state: 'CA',
        zipcode: zipcode,
        longitude: longitude,
        altitude: altitude,
        price: price,
        rent: rent,
        cap_rate: cap_rate,
        annualized_return: annualized_return,
        total_return: total_return,
        gross_yield: gross_yield
    )

    house_photo = open("https://active-storage-aa-superental-seeds.s3-us-west-1.amazonaws.com/house_#{house_num}.jpg")
    newProperty.photo.attach(io: house_photo, filename: "house_#{house_num}.jpg")

end
# property1 = Property.create(
#     owner_id: demo.id, bedroom:3, bathroom:2,sqft:1050, 
#     address:'100 wonderland', city:'Los Angeles', state:'CA', zipcode:90000,longitude:321.22, altitude:231.22, 
#     price:99999, rent:3000, cap_rate:0.08, annualized_return:0.08, total_return:0.35, gross_yield:0.066)
