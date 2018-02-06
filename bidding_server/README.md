# Server-Side
* Build a Rails JSON API. Use the wireframes below to choose which fields you will need for your application's models.

- Implement create, show, index, destroy and update actions for Auctions.
- Auctions should have many Bids.
- Implement create and destroy actions for Bids.

> rails g controller Api::V1::Auctions --no-assets --no-helper --skip-template-engine
> rails g model auction title detail:text end_date:date reserve_price:float
> rails g model bid title bid_price:float auction:references
> rails g migration remove_title_from_bids title:string

> rails g serializer auction title:string detail:text end_date:date reserve_price:float

> rails g model user first_name last_name email password_digest
> rails g migration add_user_to_actions user:references
> rails g migration add_user_to_bids user:references

> rails g controller Api::Application --no-assets --no-helper --skip-template-engine
> rails g migration add_api_key_to_user api_key:string

> rails g controller Api::V1::Tokens --no-assets --no-helper --skip-template-engine

> rails g controller Api::V1::Users --no-assets --no-helper --skip-template-engine
> rails g serializer user first_name last_name email password_digest

---not Implement yet
> rails g controller Api::V1::Bids --no-assets --no-helper --skip-template-engine
> rails g serializer bid bid_price:float
