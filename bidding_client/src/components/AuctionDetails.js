import React from 'react';

function AuctionDetails (props = {}) {
  const {author = {}} = props;

   return (
     <div className="AuctionDetails">
       <h4>Title: {props.title}</h4>
       <p>Details: {props.detail}</p>
       <p>By {author.full_name}</p>
       <p>Ends on: {props.end_date}</p>
       <p>Reserve Price: {props.reserve_price} </p>
       <p><strong>Created At:</strong> {props.created_at}</p>
       <p><strong>Updated At:</strong> {props.updated_at}</p>
     </div>
   );
 }

export {AuctionDetails};
