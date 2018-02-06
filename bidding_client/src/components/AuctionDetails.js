import React from 'react';

function AuctionDetails (props = {}) {
  const {author = {}} = props;

   return (
     <div className="AuctionDetails">
       <h4>Title: {props.title}</h4>
       <p>Details: {props.detail}</p>
       <p style={{color:'gray'}}>By <em>{author.full_name}</em></p>
       <p>Ends on: {props.end_date}</p>
       <p>Reserve Price: <strong>{props.reserve_price} </strong></p>
       <p><strong>Created At:</strong> {props.created_at}</p>
       <p><strong>Updated At:</strong> {props.updated_at}</p>
     </div>
   );
 }

export {AuctionDetails};
