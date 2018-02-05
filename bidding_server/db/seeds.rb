PASSWORD = '123'

Bid.destroy_all
Auction.destroy_all
User.destroy_all

#--------------------------------------------------------------------- user
super_user = User.create(
  first_name: 'Gloria',
  last_name: 'Ding',
  email: 'gd@gmail.com',
  password: PASSWORD
)

20.times.each do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
  )
end

users = User.all
puts Cowsay.say("Create #{users.count} users", :tux)

#--------------------------------------------------------------------- auction
100.times do
  Auction.create(
    title: Faker::Book.title,
    detail: Faker::Lorem.paragraph,
    end_date: Faker::Date.forward(23),
    reserve_price: rand(50..500),
    user: users.sample
  )
end

auctions = Auction.all

puts Cowsay.say("Created #{auctions.count} auctions", :ghostbusters)
#--------------------------------------------------------------------- bid
auctions.each do |auction|
  rand(1..5).times.each do
    Bid.create(
      bid_price: rand(1..550),
      auction: auction,
      user: users.sample
    )
  end
end

bids = Bid.all

puts Cowsay.say("Create #{bids.count} bids", :moose)
