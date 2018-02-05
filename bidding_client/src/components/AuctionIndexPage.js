import React, {Component} from 'react';
import auctions from '../data/auctions';
import {AuctionForm} from './AuctionForm';

 class AuctionIndexPage extends Component {
   constructor (props) {
      super(props);

      this.state = {
        auctions: auctions,
        newAuction: {
          title: "",
          detail: "",
          end_date:"",
          reserve_price:"",
          author: {}
        }
      };

      this.deleteAuction = this.deleteAuction.bind(this);
      this.addAuction = this.addAuction.bind(this);
      this.updateNewAuction = this.updateNewAuction.bind(this);
    }

    updateNewAuction(data) {
      console.log(data);
      const {newAuction} = this.state;
      this.setState({
        newAuction: {...newAuction, ...data}
      });
    }


  addAuction () {
    const {auctions, newAuction} = this.state;
    this.setState({
      auctions: [newAuction, ...auctions],
      newAuction: {
        title: "",
        detail: "",
        end_date:"",
        reserve_price:"",
        author: {}
      }
    });
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
     const {newAuction} = this.state;
     return (
       <main className="AuctionIndexPage" style={{padding: '0  20px'}} >
         <h2>Auctions: </h2>
        <AuctionForm
           auction={newAuction}
           onChange={this.updateNewAuction}
           onSubmit={this.addAuction}
         />
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
