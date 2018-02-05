import React, {Component} from 'react';
import {AuctionForm} from './AuctionForm';
import {Auction} from '../requests/auctions';

 class AuctionIndexPage extends Component {
   constructor (props) {
      super(props);

      this.state = {
        loading:true,
        auctions: [],
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

  componentDidMount () {
     Auction
       .all()
       .then(auctions => {
         this.setState({auctions, loading: false})
       })
   }

   render(){
     const {newAuction, loading} = this.state;

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
