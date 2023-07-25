import axios from 'axios';
import React, { Component, Fragment, useEffect } from 'react'
import { useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import CollectionLoading from '../PlaceHolder/CollectionLoading';
const  Collection=()=> {
/*   constructor(){
    super();
    this.state={
      collectionProducts:[],
      loaderDiv:"",
      mainDiv:"d-none"  
    }
  } */
  const [collectionProducts,SetcollectionProducts] = useState([]);
  const [loaderDiv,SetloaderDiv] =  useState("");
  const [mainDiv,SetmainDiv] =  useState("d-none");


 async function getData() {
    const response =  await fetch(AppURL.productByRemark('COLLECTION'))
    const data = await response.json();

    console.log(data);
    SetcollectionProducts(data)
    SetloaderDiv("d-none");
    SetmainDiv("")
  }
 getData();
 /*  setTimeout(() => {
    axios.get(AppURL.productByRemark('COLLECTION'))
    .then(res => { 
      SetcollectionProducts(res.data)
      SetloaderDiv("d-none");
      SetmainDiv("")
    })
    .catch( error => {
      console.log(error)
      SetloaderDiv("");
      SetmainDiv("d-none")
    })
  }, 1000);
 */
  

  

    const allCollection = collectionProducts;

    const myCollections = allCollection.map(collection=>

      <Col className="p-0" key={collection.id} xl={3} lg={3} md={3} sm={6} xs={6}>
  <Link className="text-link" to={"/product-details/"+collection.id} >
<Card className="image-box card w-100">
<Image className="center w-75" src={collection.image} />   
<Card.Body> 
<p className="product-name-on-card">{collection.title}</p>
<p className="product-price-on-card">Price : $ {collection.special_price==='no' ? collection.collection:collection.price }</p>

</Card.Body>
</Card>    
</Link>      
</Col>

      )
    return (
        <Fragment>
          
          {/* <CollectionLoading isLoading={loaderDiv}/> */}

          <div>
        <Container className="text-center" fluid={true}>
<div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
<p>Some Of Our Exclusive Collection, You May Like</p>
</div>

{/* <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
<Card className="image-box card w-100">
<Image className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/keykscw0-0/t-shirt/l/d/q/3xl-bmrgyrnful-z12-blive-original-imafvgzkyjghf7ba.jpeg?q=50" />   
<Card.Body> 
<p className="product-name-on-card">Striped Men Round Neck Maroon, Grey</p>
<p className="product-price-on-card">Price : $120</p>

</Card.Body>
</Card>          
</Col>
 */}
<Row>
{
  myCollections
}
</Row>
        </Container>
        </div>
   </Fragment>
    )

  }

export default Collection;