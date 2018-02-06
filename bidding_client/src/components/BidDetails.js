import React from 'react';

function BidDetails (props = {}) {
  const {onDeleteClick = () => {}} = props;
   return (
     <div>
       <p>Bid: {props.bid_price}</p>
       <p style={{color:'gray'}}>By <em>{props.author_full_name}</em></p>
       <p><strong>Created At:</strong> {props.created_at}</p>
       <button
         onClick={() => onDeleteClick(props.id)}
         style={{backgroundColor:'PLUM'}}
       >Delete</button>
     </div>
   );
 }

export {BidDetails};
