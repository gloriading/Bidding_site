import React from 'react';

 function AuctionForm (props) {
   const {
     auction = {},
     onSubmit = () => {},
     onChange = () => {}
   } = props;

   const handleSubmit = event => {
     event.preventDefault();
     onSubmit();
   };

   const handleChange = name => event => {
       onChange({[name]: event.currentTarget.value});
    };

   return (
     <form
       className="AuctionForm"
       onSubmit={handleSubmit}
     >
       <div>
         <label htmlFor="title">Title</label> <br />
         <input
           onChange={handleChange("title")}
           value={auction.title}
           name="title"
           id="title"
         />
       </div>

       <div>
         <label htmlFor="detail">Details</label> <br />
         <input
           onChange={handleChange("detail")}
           value={auction.detail}
           name="detail"
           id="detail"
         />
       </div>

       <div>
         <label htmlFor="end_date">End Date</label> <br />
         <input
           onChange={handleChange("end_date")}
           value={auction.end_date}
           name="end_date"
           id="end_date"
         />
       </div>

       <div>
         <label htmlFor="reserve_price">Reserve Price</label> <br />
         <input
           onChange={handleChange("reserve_price")}
           value={auction.reserve_price}
           name="reserve_price"
           id="reserve_price"
         />
       </div>

       <div>
         <input type="submit" value="Submit"/>
       </div>
     </form>
   );
 }

 export {AuctionForm};
