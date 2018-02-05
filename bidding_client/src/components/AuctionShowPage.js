import React from 'react';
import {AuctionDetails} from './AuctionDetails';
import {BidDetails} from './BidDetails';

function AuctionShowPage () {
   return (
     <main className="AuctionShowPage">
       <AuctionDetails
         title="abc"
         detail="what details?"
         end_date="2018-03-03"
         reserve_price={200}
         author={{full_name: "Jon Snow"}}
         created_at="2018-01-01"
         updated_at="2018-01-01"
       />
       <h3>Bids:</h3>
       <BidDetails
         bid_price={180}
         author_full_name="Jane Doe"
         created_at="2018-01-05"
       />
     </main>
   );
 }

export {AuctionShowPage};
