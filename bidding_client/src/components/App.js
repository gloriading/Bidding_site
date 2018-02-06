import React, { Component } from 'react';
import {AuctionShowPage} from './AuctionShowPage';
import {AuctionIndexPage} from './AuctionIndexPage';
import {AuctionNewPage} from './AuctionNewPage';
import {SignInPage} from './SignInPage';
import {AuthRoute} from './AuthRoute';
import {NavBar} from './NavBar';
import {
 BrowserRouter as Router,
 Route,
 Switch
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';


class App extends Component {
    constructor (props) {
     super(props);

     this.state = {
       user: null
     };
     this.signIn = this.signIn.bind(this);
   }

   signIn () {
     const jwt = localStorage.getItem('jwt');
     if (jwt) {
       const payload = jwtDecode(jwt);
       this.setState({user: payload});
     }
   }

   componentDidMount () {
     this.signIn();
   }

   isAuth () {
     return !!this.state.user
   }

   render () {
     const {user} = this.state;
     return (
       <Router >
         <div className="App">
           <NavBar user={user} />
           <Switch>
             <Route path="/sign_in" render={props => {
               return <SignInPage {...props} onSignIn={this.signIn} />
             }} />
             <AuthRoute
               isAuthenticated={this.isAuth()}
               path="/auctions"
               exact
               component={AuctionIndexPage}
             />
             <AuthRoute
               isAuthenticated={this.isAuth()}
               path="/auctions/new"
               component={AuctionNewPage}
             />
             <AuthRoute
               isAuthenticated={this.isAuth()}
               path="/auctions/:id"
               component={AuctionShowPage}
             />
           </Switch>
         </div>
       </Router>
     );
   }
  }

export default App;
