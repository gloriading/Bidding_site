import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
;

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

 function BidDetails (props = {}) {
    return (
      <div>
        <p>Bid: {props.bid_price}</p>
        <p>By {props.author_full_name}</p>
        <p><strong>Created At:</strong> {props.created_at}</p>
      </div>
    );
  }

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

   function App () {
     return (
       <AuctionShowPage />
     );
   }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
