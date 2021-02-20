# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
demo = User.create(email:'demo@gmail.com', password:'12345678')
Property.destroy_all
property1 = Property.create(title: 'beach house', owner_id: demo.id, bedroom:3, bathroom:2,sqft:1050, address:'100 wonderland', city:'Los Angeles', state:'CA', zipcode:90000,longitude:321.22, altitude:231.22, price:99999, rent:3000, cap_rate:0.08, annualized_return:0.08, total_return:0.35, gross_yield:0.066)
property2 = Property.create(title: 'Big Bear Cabin', owner_id: demo.id,bedroom:3, bathroom:2,sqft:1050, address:'100 wonderland', city:'Los Angeles', state:'CA', zipcode:90000,longitude:321.22, altitude:231.22, price:99999, rent:3000, cap_rate:0.08, annualized_return:0.08, total_return:0.35, gross_yield:0.066)