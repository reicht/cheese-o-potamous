# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u = User.create(username: Faker::Internet.user_name, password: "password")

15.times do
  Cheese.create(name: Faker::Team.creature)
end

5.times do
  Fav.create(user_id: u.id, cheese_id: (Cheese.all.sample.id))
end
