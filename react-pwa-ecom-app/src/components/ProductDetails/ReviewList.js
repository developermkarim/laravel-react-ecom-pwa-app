import React, { useEffect } from 'react';
import { useState } from 'react';
import AppURL from '../../api/AppURL';

const ReviewList = ({productReview}) => {
    
    const [reviews,SetReviews] = useState([]);

     useEffect( () =>{
            fetch(AppURL.getProductWiseReview(productReview))
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetReviews(data);
            });
        },);
       
    return (
        <div>
             {
                reviews.map(review=>
                    <div>
               <p className=" p-0 m-0"><span className="Review-Title">{review.reviewer_name}</span> <span className="text-success"><i className="fa fa-star"></i> </span> </p>
                  <p>{review.reviewer_comments}</p>
        
                    </div> 
                    
                    )
             }
        </div>
    );
};

export default ReviewList;