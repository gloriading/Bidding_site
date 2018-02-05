import React, {Component} from 'react';
 import {AuctionForm} from './AuctionForm';
 import {Auction} from '../requests/auctions';

 class AuctionNewPage extends Component {
   constructor (props) {
     super(props);

     this.state = {
       newAuction: {
         title: "",
         detail: "",
         end_date:"",
         reserve_price:""
       }
     };

     this.createAuction = this.createAuction.bind(this);
     this.updateNewAuction = this.updateNewAuction.bind(this);
   }

   updateNewAuction (data) {
     const {newAuction} = this.state;

     this.setState({
       newAuction: {...newAuction, ...data}
     });
   }

   createAuction () {
     const {history} = this.props;
     const {newAuction} = this.state;
     Auction
       .create(newAuction)
       .then(({id}) => {
         history.push(`/auctions/${id}`)
       });
   }

   render () {
     const {newAuction} = this.state;

     return (
       <main
         className="AuctionNewPage"
         style={{padding: '0  20px'}}
       >
         <h2>Auctions</h2>
         <AuctionForm
           auction={newAuction}
           onChange={this.updateNewAuction}
           onSubmit={this.createAuction}
         />

       </main>
     );
   }
 }

 export {AuctionNewPage};
