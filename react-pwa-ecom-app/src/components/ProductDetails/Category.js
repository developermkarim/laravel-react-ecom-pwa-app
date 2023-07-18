import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

export default class Category extends Component {

  render() {

    const category = this.props.categoryData;
    const productbycategory = this.props.productData;

    const CateByProducts = productbycategory.map((cate_pd)=>{
        
    return  <Col className="p-0" key={cate_pd.id} xl={3} lg={3} md={3} sm={6} xs={6}>
        <Card className="image-box card w-100">
        <Image className="center w-75" src={cate_pd.image} />   
        <Card.Body> 
        <p className="product-name-on-card">{cate_pd.title}</p>
        <p className="product-price-on-card">Price : $ {cate_pd.special_price==='no' ? cate_pd.cate_pd:cate_pd.price }</p>
        
        </Card.Body>
        </Card>          
        </Col>
  })

    return (
       <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2>{category}</h2>
          <p>Some Of Our Exclusive cate_pd, You May Like</p>
          </div>


       <Row>
   
 {CateByProducts}
 
      </Row>


                   </Container>

              </Fragment>
    )
  }
}
