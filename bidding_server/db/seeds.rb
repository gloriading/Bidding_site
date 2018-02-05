

#--------------------------------------------------------------------- auction
100.times do
  Auction.create(
    title: Faker::Book.title,
    detail: Faker::Lorem.paragraphs,
    end_date: Faker::Date.forward(23),
    reserve_price: rand(50..500)
  )
end

auctions = Auction.all

puts Cowsay.say("Created #{auctions.count} auctions", :ghostbusters)
#--------------------------------------------------------------------- bid
auctions.each do |auction|
  rand(1..5).times.each do
    Bid.create(
      bid_price: rand(1..550),
      auction: auction
    )
  end
end

bids = Bid.all

puts Cowsay.say("Create #{bids.count} bids", :moose)
