import React, {Component} from 'react';
import auctions from '../data/auctions';


 class AuctionIndexPage extends Component {
   constructor (props) {
      super(props);

      this.state = {
        auctions: auctions
      };
      this.deleteAuction = this.deleteAuction.bind(this);
    }

  deleteAuction(auctionId){
    return () => {
      const {auctions} = this.state;
       this.setState({
         auctions: auctions
          .filter(auction => auction.id !== auctionId)
       });
    }
  }

   render(){

     return (
       <main className="AuctionIndexPage" style={{padding: '0  20px'}} >
         <h2>Auctions: </h2>
         <ul style={{paddingLeft: '10px'}}>
           {
             this.state.auctions.map(auction => (
               <li key={auction.id}>
                 <a href="">{auction.title}</a>
                 {' '}
                 <button
                  onClick={this.deleteAuction(auction.id)}
                   >Delete</button>
               </li>
             ))
           }
         </ul>
       </main>
     );

    }
 }

 export {AuctionIndexPage};
