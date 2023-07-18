import axios from 'axios';
import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL';

class FeaturedProducts extends Component {

     constructor(){
          super();
          this.state={
               products:[]
          };
     }

     /* Fetching Data by API through componentDidMount() */
     componentDidMount(){
          axios.get(AppURL.productByRemark("FEATURED"))
          .then((res)=>{
               this.setState({products:res.data})
          })
          .catch((error)=>{
               console.log(error);
          })
     }
     render() {
          const productsAll = this.state.products;
          console.log(productsAll);
          const productsView = productsAll.map((pd)=> 
           <Col className="p-1" key={pd.id} xl={2} lg={2} md={2} sm={4} xs={6}>
               <Link to="/product-details">
          <Card className="image-box card">
               <Image className="center" src={pd.image} />   
               <Card.Body> 
               <p className="product-name-on-card">{pd.title}</p>
               <p className="product-price-on-card">Price : ${pd.special_price === 'no'? pd.price:pd.special_price}</p>
                    
               </Card.Body>
               </Card>
               </Link>
          </Col>

     )

          return (
              <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2>FEATURED PRODUCT</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>


       <Row>
   
  {productsView}
 
      </Row>


                   </Container>

              </Fragment>
          )
     }
}

export default FeaturedProducts