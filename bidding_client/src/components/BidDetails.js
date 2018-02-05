import React from 'react';

function BidDetails (props = {}) {
  const {onDeleteClick = () => {}} = props;
   return (
     <div>
       <p>Bid: {props.bid_price}</p>
       <p>By {props.author_full_name}</p>
       <p><strong>Created At:</strong> {props.created_at}</p>
       <button
         onClick={() => onDeleteClick(props.id)}
       >Delete</button>
     </div>
   );
 }

export {BidDetails};
