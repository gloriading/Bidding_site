 import React from 'react';
 import {CurrentDateTime} from './CurrentDateTime';
 import {Link} from 'react-router-dom';

 function NavBar (props) {
   return (
     <nav
       style={{
         padding: '10px',
         display: 'flex',
       }}
     >
       <Link style={{marginRight: '20px'}} to="/">Home</Link>
       <Link style={{marginRight: '20px'}} to="/auctions/new">New Auction</Link>
       <Link to="/auctions">Auctions</Link>
       <CurrentDateTime
         style={{
           marginLeft: 'auto'
         }}
       />
     </nav>
   );
 }

 export {NavBar};