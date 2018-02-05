import React, {Component} from 'react';
import {AuctionDetails} from './AuctionDetails';
import {BidDetails} from './BidDetails';
import {BidList} from './BidList';
import {Auction} from '../requests/auctions';

class AuctionShowPage extends Component {
  constructor (props) {
     super(props);

     this.state = {
       loading: true,
       auction: {}
     };
     this.deleteBid = this.deleteBid.bind(this);
     this.delete = this.delete.bind(this);

   }

   delete () {
      this.setState({
        auction: {}
      });
   }

   deleteBid (bidId) {
      const {auction} = this.state;
      const {bids} = auction;

      this.setState({
        auction: {
          ...auction,
          bids: bids.filter(bid => bid.id !== bidId)
        }
      });
    }

    componentDidMount () {
      const {params} = this.props.match;
      Auction
        .get(params.id)
        .then(auction => {
          this.setState({auction, loading: false})
        });
    }


  render(){
    const {auction, loading} = this.state;
    const {bids = []} = auction;

    if (loading) {
      return (
        <main
          className="AuctionShowPage"
          style={{
            padding: '0 20px'
          }}
        >
          <h3>Loading auction...</h3>
        </main>
      )
    }

    // if (Object.keys(this.state.auction).length < 1) {
    //    return (
    //      <main
    //        className="AuctionShowPage"
    //        style={{
    //          padding: '0 20px'
    //        }}
    //      >
    //        <h2>Auction doesn't exist!</h2>
    //      </main>
    //    );
    //  }
     return (
       <main className="AuctionShowPage">
         <AuctionDetails {...auction} />
         <button onClick={this.delete} > Delete </button>
         <h3>Bids:</h3>
         <BidList
           bids={bids}
           onBidDeleteClick={this.deleteBid}
          />
       </main>
     );

   }
 }

export {AuctionShowPage};
