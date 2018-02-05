# Server-Side
* Build a Rails JSON API. Use the wireframes below to choose which fields you will need for your application's models.

- Implement create, show, index, destroy and update actions for Auctions.
- Auctions should have many Bids.
- Implement create and destroy actions for Bids.

> rails g controller Api::V1::Auctions --no-assets --no-helper --skip-template-engine
> rails g model auction title detail:text end_date:date reserve_price:float
> rails g model bid title bid_price:float auction:references
