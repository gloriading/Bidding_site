import React, {Component} from 'react';
import {Auction} from '../requests/auctions';
import {Link} from 'react-router-dom';

 class AuctionIndexPage extends Component {
   constructor (props) {
      super(props);

      this.state = {
        loading:true,
        auctions: []
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

  componentDidMount () {
     Auction
       .all()
       .then(auctions => {
         this.setState({auctions, loading: false})
       })
   }

   render(){
     const {loading} = this.state;

      if (loading) {
        return (
          <main
            className="AuctionIndexPage"
            style={{padding: '0 20px'}}
          >
            <h3>Loading auctions...</h3>
          </main>
        )
      }

     return (
       <main className="AuctionIndexPage" style={{padding: '0  20px'}} >
         <h4>Auctions List </h4>

         <ul style={{paddingLeft: '10px'}}>
           {
             this.state.auctions.map(auction => (
               <li key={auction.id}
                 style={{marginBottom: '5px', color: 'hotpink'}}>
                 <Link
                   to={`/auctions/${auction.id}`}
                   style={{color: 'hotpink'}}
                   >
                  {auction.title}
                  </Link>
                 {' '}
                 <button
                  onClick={this.deleteAuction(auction.id)}
                  style={{backgroundColor:'lightyellow'}}
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
