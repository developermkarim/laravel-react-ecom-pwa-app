import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Container,Row,Col,Card, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL';

const SuggestedProduct = ({subcategory})=> {

     const [suggestedProduct,SetSuggestedProduct] = useState([]);
     
          useEffect(()=>{

               fetch(AppURL.getSuggestedProduct(subcategory))
               .then(res => res.json())
               .then(data=>{
                    console.log(data)
                    SetSuggestedProduct(data)
               })
          })

          if(suggestedProduct.length > 0){
        
         const similarProductAll =   suggestedProduct.map(similarProduct=>
              
             <Col className="p-1" key={similarProduct.id} xl={2} lg={2} md={2} sm={4} xs={6}>
               <Link className="text-link" to={`/product-details/${similarProduct.id}`}>
          <Card className="image-box card">
               <Image className="center" src={similarProduct.image} />   
               <Card.Body> 
               <p className="product-name-on-card">{similarProduct.title}</p>
               <p className="product-price-on-card">Price : ${similarProduct.price}</p>
                    
               </Card.Body>
               </Card>
               </Link>
          </Col>
               
               )

          return (

               <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2>YOU MAY ALSO LIKE </h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>


     <Row>

{similarProductAll}

</Row>


                   </Container>

              </Fragment>
          ) 
     }

     else{

       return   ( <Fragment>
          <Container className="text-center" fluid={true}>
 <div className="section-title text-center mb-55"><h2>YOU MAY ALSO LIKE </h2>
 <p>Some Of Our Exclusive Collection, You May Like</p>
 </div>

 <p>There have no similar product </p>

</Container>

</Fragment>
     )

     }

 }

export default SuggestedProduct