import {BASE_URL} from './config';
// const API_KEY = 'API_KEY 5b4be0fca5a98d10125057e0c671373e7c4d7829d43245eeae673da9b57da9d3';
function getJwt () {
   return `JWT ${localStorage.getItem('jwt')}`;
 }

 export const Auction = {
   all () {
     return fetch(
       `${BASE_URL}/api/v1/auctions`,
       {
         headers: {
           'Authorization': getJwt ()
         }
       }
     )
       .then(res => res.json())
   },
   get (id) {
     return fetch(
       `${BASE_URL}/api/v1/auctions/${id}`,
       {
         headers: {
           'Authorization': getJwt ()
         }
       }
     )
       .then(res => res.json())
   },
   create (params) {
     return fetch(
       `${BASE_URL}/api/v1/auctions`,
       {
         method: 'POST',
         headers: {
           'Authorization': getJwt (),
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(params)
       }
     )
     .then(res => res.json());
   }
 }
